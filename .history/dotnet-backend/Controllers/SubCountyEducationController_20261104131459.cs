using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KemisOnboarding.Api.Dto;
using KemisOnboarding.Api.Models;

namespace KemisOnboarding.Api.Controllers;

[ApiController]
[Route("api/scde")]
[Authorize(Roles = "SCDE")] // Only SCDEs can access this
public class SubCountyEducationController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public SubCountyEducationController(ApplicationDbContext context)
    {
        _context = context;
    }

    private int CurrentUserId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    // 1. Fetches all schools that the CDE has assigned to this specific SCDE
    [HttpGet("assigned-schools")]
    public async Task<ActionResult<IEnumerable<AssignedSchool>>> GetAssignedSchools()
    {
        var schools = await _context.BasicEducations
            .Where(s => s.supervisorId == CurrentUserId) // Assigned by CDE
            .Select(s => new AssignedSchool
            {
                InstitutionId = s.institutionId,
                institutionName = s.institutionName,
                County = s.county,
                SubCounty = s.subCounty,
                Status = s.status,
                // Check if a report already exists for this school by this SCDE
                HasReport = _context.SubCountyEducation.Any(r => r.institutionId == s.institutionId && r.scdeId == CurrentUserId)
            })
            .ToListAsync();

        return Ok(schools);
    }

    // 2. POST: api/scde/reports
    // Submit the report and recommendation
    [HttpPost("reports")]
    public async Task<IActionResult> SubmitReport([FromBody] SubmitReportRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        // Verify the school exists and is actually assigned to this SCDE
        var school = await _context.BasicEducations.FindAsync(request.InstitutionId);
        if (school == null) return NotFound("School not found.");
        if (school.supervisorId != CurrentUserId) return Unauthorized("This school is not assigned to you.");

        // Create the report
        var report = new SubCountyEducationReport
        {
            scdeId = CurrentUserId,
            institutionId = request.InstitutionId,
            summary = request.summary,
            recommendation = request.recommendation,
            status = "pending",
            createdAt = DateTime.UtcNow.ToString("o")
        };

        _context.SubCountyEducation.Add(report);
        
        // Update the school status to show CDE it's ready for review
        school.status = "recommendation_pending"; 
        school.updatedAt = DateTime.UtcNow.ToString("o");

        await _context.SaveChangesAsync();

        return Ok(new { message = "Report submitted successfully to the CDE." });
    }

    // 3. GET: api/scde/my-reports
    // Fetch all reports previously submitted by this SCDE
    [HttpGet("my-reports")]
    public async Task<ActionResult<IEnumerable<Report>>> GetMyReports()
    {
        var reports = await _context.SubCountyEducation
            .Where(r => r.scdeId == CurrentUserId)
            .OrderByDescending(r => r.createdAt)
            .Select(r => new Report
            {
                reportId = r.reportId,
                InstitutionId = r.institutionId,
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