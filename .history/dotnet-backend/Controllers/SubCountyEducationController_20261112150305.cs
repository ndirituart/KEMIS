using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models; //To access the models for AssignedSchool, Report, and SubmitReportRequest
using dotnet_backend.Services; //To import InstutionService to get 

namespace KemisOnboarding.Api.Controllers;

[ApiController]
[Route("api/scde")]
[Authorize(Roles = "Sub-County Director of Education (SCDE)")]  // Only SCDEs can access this
public class SubCountyEducationController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public SubCountyEducationController(ApplicationDbContext context)
    {
        _context = context;
    }

    private int CurrentUserId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

   // 0. Get SCDE Profile details
   [HttpGet("profile")]
    public Task<SubCountyEducation> GetProfile(CancellationToken ct) =>
        _workflow.GetScdeProfileAsync(userId, ct);

    // 1. Fetches all schools that the CDE has assigned to this specific SCDE
    [HttpGet("assigned-schools")]
    public async Task<IActionResult> GetAssignedSchools()
    {
        var schools = await _context.InstitutionAssignments
            .Where(a => a.assigneeId == CurrentUserId)
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


    // 2. Submit a report
    [HttpPost("reports")]
    public async Task<IActionResult> SubmitReport([FromBody] SubmitReportRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var school = await _context.BasicEducations.FindAsync(request.institutionId);
        if (school == null) return NotFound("School not found.");

        // Create the report
        var report = new Report // Make sure you are using your Report model
        {
            scdeId = CurrentUserId,
            institutionId = request.institutionId,
            institutionName = school.institutionName,
            summary = request.summary,
            recommendation = request.recommendation,
            status = "submitted",
            createdAt = DateTime.UtcNow.ToString("o")
        };

        _context.Reports.Add(report); // Make sure Reports is in your DbContext
        
        // Update assignment
        var assignment = await _context.InstitutionAssignments
            .FirstOrDefaultAsync(a => a.institutionId == request.institutionId && a.assigneeId == CurrentUserId);
        if (assignment != null) assignment.hasReport = true;

        // Update school status
        school.status = "recommendation_pending"; 
        school.updatedAt = DateTime.UtcNow.ToString("o");

        await _context.SaveChangesAsync();

        return Ok(new { message = "Report submitted successfully to the CDE." });
    }

    // 3. Fetch all reports previously submitted by this SCDE
    [HttpGet("reports")]
    public async Task<ActionResult<IEnumerable<Report>>> GetMyReports()
    {
        var reports = await _context.Reports
            .AsNoTracking()
            .Where(r => r.scdeId == CurrentUserId)
            .OrderByDescending(r => r.createdAt)
            .Select(r => new Report
            {
                reportId = r.reportId,
                institutionId = r.institutionId,
                // Join to get the school name
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