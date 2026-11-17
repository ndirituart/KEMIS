using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/sub-county-education")]
// [Authorize(Roles = "Sub-County Director of Education (SCDE)")] 
public class SubCountyEducationController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly InstitutionWorkflowService _workflow;

    public SubCountyEducationController(ApplicationDbContext context, InstitutionWorkflowService workflow)
    {
        _context = context;
        _workflow = workflow;
    }

    // Hardcoded for testing
    private int userId => 4; 
    // private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    // 0. Get SCDE Profile details
    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile([FromQuery] string? subCounty, CancellationToken ct)
    {
        if (!string.IsNullOrEmpty(subCounty))
        {
            // If testing with a specific subcounty, look it up in the DB
            var profile = await _context.SubCountyEducation
                .FirstOrDefaultAsync(s => s.subCounty.ToLower().Contains(subCounty.ToLower()), ct);
            if (profile == null) return NotFound($"Subcounty {subCounty} not found.");
            return Ok(profile);
        }

        // Fallback to the logged-in user
        return Ok(await _workflow.GetScdeProfileAsync(userId, ct));
    }
    
    // 1. Get Dashboard Stats
    [HttpGet("dashboard-stats")]
    public async Task<IActionResult> GetDashboardStats([FromQuery] string? subCounty, CancellationToken ct)
    {
        if (!string.IsNullOrEmpty(subCounty))
        {
            // Fetch stats dynamically based on the query parameter
            var schools = await _context.BasicEducations.Where(s => s.subCounty.Contains(subCounty)).ToListAsync();
            return Ok(new {
                subCountyName = subCounty,
                stats = new {
                    totalApplications = schools.Count(s => s.status == "Pending"),
                    totalInstitutions = schools.Count(s => s.status == "SCDE Recommended"),
                    schoolsReceived = schools.Count(s => s.status == "Assigned SCDE"),
                    totalLearners = schools.Sum(s => s.totalLearners),
                    subjectCombinations = 0
                }
            });
        }

        return Ok(await _workflow.GetScdeDashboardStatsAsync(userId, ct));
    }

    //2. Get schools by Sub-County
    [HttpGet("institutions")]
    public Task<object> GetSchoolsBySubCounty([FromQuery] string subCounty, [FromQuery] string? status, CancellationToken ct) =>
        _workflow.GetSchoolsBySubCountyAsync(subCounty, status, ct);
        

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
        // Get the SCDE's subcounty
        var scde = await _context.SubCountyEducation.FirstOrDefaultAsync(s => s.userId == userId, ct);
        if (scde == null) return NotFound("SCDE not found.");

        var scqasos = await _context.Users
            .Where(u => u.role == "Sub-County Quality Assurance and Standards Officer (SCQASO)" 
                     && u.subCounty == scde.subCounty 
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