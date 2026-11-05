using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models; //To access the models for AssignedSchool, Report, and SubmitReportRequest

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

    // 1. Fetches all schools that the CDE has assigned to this specific SCDE
    

    // 2. Submit the report and recommendation
[HttpPost("reports")]
public async Task<IActionResult> SubmitReport([FromBody] SubmitReportRequest request)
 {
    if (!ModelState.IsValid) return BadRequest(ModelState);

    // 1. Verify the school exists and is assigned to this SCDE
    var school = await _context.BasicEducations.FindAsync(request.institutionId);
    if (school == null) return NotFound("School not found.");
    if (school.supervisorId != CurrentUserId) return Unauthorized("This school is not assigned to you.");

    // 2. Create the report
    var report = new SubCountyEducationReport
    {
        scdeId = CurrentUserId,
        institutionId = request.institutionId,
        summary = request.summary,
        recommendation = request.recommendation,
        status = "pending",
        createdAt = DateTime.UtcNow.ToString("o")
    };
    _context.SubCountyEducation.Add(report);
    
    // 3. Links the assignment to show the report is done
    var assignment = await _context.InstitutionAssignments
        .FirstOrDefaultAsync(a => a.institutionId == request.institutionId && a.assigneeId == CurrentUserId);
        
    if (assignment != null)
    {
        assignment.hasReport = true;
        assignment.status = "completed";
    }
    
    // 4. Update the school status
    school.status = "recommendation_pending"; 
    school.updatedAt = DateTime.UtcNow.ToString("o");

    await _context.SaveChangesAsync();

    return Ok(new { message = "Report submitted successfully to the CDE." });
  }

    // 3. Fetch all reports previously submitted by this SCDE
    [HttpGet("reports")]
    public async Task<ActionResult<IEnumerable<Report>>> GetMyReports()
    {
        var reports = await _context.SubCountyEducation
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
                Status = r.status,
                createdAt = r.createdAt
            })
            .ToListAsync();

        return Ok(reports);
    }
}