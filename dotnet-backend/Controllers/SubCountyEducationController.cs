using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/sub-county-education")]
[Authorize(Roles = "Sub-County Director of Education (SCDE)")]
public class SubCountyEducationController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly InstitutionWorkflowService _workflow;

    public SubCountyEducationController(ApplicationDbContext context, InstitutionWorkflowService workflow)
    {
        _context = context;
        _workflow = workflow;
    }

    private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    // 0. Get SCDE Profile details
    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile(CancellationToken ct)
    {
        var profile = await _workflow.GetScdeProfileAsync(userId, ct);
        if (profile == null) return NotFound("No active sub-county profile is linked to this account.");
        return Ok(profile);
    }

    [HttpGet("dashboard-stats")]
    public async Task<IActionResult> GetDashboardStats(CancellationToken ct)
    {
        var stats = await _workflow.GetScdeDashboardStatsAsync(userId, ct);
        if (stats == null) return NotFound("No active sub-county profile is linked to this account.");
        return Ok(stats);
    }

    //2. Get schools by Sub-County
    [AllowAnonymous]
    [HttpGet("institutions")]
    public Task<object> GetSchoolsBySubCounty([FromQuery] string subCounty, [FromQuery] string? status, [FromQuery] string? county, CancellationToken ct) =>
        _workflow.GetSchoolsBySubCountyAsync(subCounty, status, ct, county);
        

    // 3. Fetches all schools that the CDE has assigned to this specific SCDE
    [HttpGet("assigned-schools")]
    public async Task<IActionResult> GetAssignedSchools()
    {
        var schools = await _context.InstitutionAssignments
            .Where(a => a.assigneeId == userId)
            .Join(_context.BasicEducations,
                a => a.institutionId,
                s => s.institutionId,
                (a, s) => new
                {
                    s.institutionId,
                    s.institutionName,
                    s.county,
                    s.subCounty,
                    a.status,
                    a.hasReport
                })
            .ToListAsync();

        return Ok(schools);
    }

    // 3. Assign a school to a SCQASO
       [HttpGet("scqasos")]
    public async Task<IActionResult> GetScqasos(CancellationToken ct)
    {
        var scde = await _context.SubCountyEducation.FirstOrDefaultAsync(s => s.userId == userId, ct);
        if (scde == null) return NotFound("SCDE not found.");

        // To make it case-insensitive and forgiving
        var scqasos = await _context.Users
            .Where(u => u.role == "Sub-County Quality Assurance and Standards Officer (SCQASO)" 
                     && u.subCounty.ToLower().Contains(scde.subCounty.ToLower()) // Case insensitive
                     && u.status == "active")
            .Select(u => new { u.userId, u.fullName, u.role })
            .ToListAsync();

        return Ok(scqasos);
    }

    // 4. Assign a SCQASO
        [HttpPost("institutions/{id:int}/assign-scqaso")]
    public Task<InstitutionDetail> AssignSCQASO(int id, [FromBody] AssignRequest req, CancellationToken ct) =>
        _workflow.AssignScqasoAsync(id, userId, req, ct);


    // 5.   Submit a report
    [HttpPost("reports")]
    public async Task<IActionResult> SubmitReport([FromBody] SubmitReportRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var school = await _context.BasicEducations.FindAsync(request.institutionId);
        if (school == null) return NotFound("School not found.");

        var report = new Report
        {
            scdeId = userId,
            institutionId = request.institutionId,
            institutionName = school.institutionName,
            summary = request.summary,
            recommendation = request.recommendation,
            status = "submitted",
            createdAt = DateTime.UtcNow.ToString("o")
        };

        _context.Reports.Add(report);
        
        var assignment = await _context.InstitutionAssignments
            .FirstOrDefaultAsync(a => a.institutionId == request.institutionId && a.assigneeId == userId);
        if (assignment != null) assignment.hasReport = true;

        school.status = "recommendation_pending"; 
        school.updatedAt = DateTime.UtcNow.ToString("o");

        await _context.SaveChangesAsync();

        return Ok(new { message = "Report submitted successfully to the CDE." });
    }

    // 4. Fetch all reports previously submitted by this SCDE
    [HttpGet("reports")]
    public async Task<ActionResult<IEnumerable<Report>>> GetMyReports()
    {
        var reports = await _context.Reports
            .AsNoTracking()
            .Where(r => r.scdeId == userId)
            .OrderByDescending(r => r.createdAt)
            .Select(r => new Report
            {
                reportId = r.reportId,
                institutionId = r.institutionId,
                institutionName = _context.BasicEducations
                    .Where(s => s.institutionId == r.institutionId)
                    .Select(s => s.institutionName)
                    .FirstOrDefault() ?? "Unknown",
                summary = r.summary,
                recommendation = r.recommendation,
                status = r.status,
                createdAt = r.createdAt
            })
            .ToListAsync();

        return Ok(reports);
    }
}