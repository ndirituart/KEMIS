using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;
using System.Security.Claims;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/subcounty-education")]
public class SubCountyEducationController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public SubCountyEducationController(ApplicationDbContext context)
    {
        _context = context;
    }

    private int CurrentUserId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    // 1. Get assigned schools
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
}