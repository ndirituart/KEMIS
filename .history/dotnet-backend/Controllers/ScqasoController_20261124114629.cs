using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // I keep forgetting this
using dotnet_backend.Services;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers;

[ApiController]
[Authorize(Roles = "Sub-County Quality Assurance and Standards Officer (SCQASO)")]
[Route("api/sub-county-quality-assurance")]
public class ScqasoController : ControllerBase
{
    private readonly InstitutionWorkflowService _workflow;
    private readonly ApplicationDbContext _context; // 🔥 Added missing context

    // 🔥 Fixed constructor name to ScqasoController
    public ScqasoController(InstitutionWorkflowService workflow, ApplicationDbContext context) 
    {
        _workflow = workflow;
        _context = context;
    }

    private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
    
    // 1. Get Profile
    [HttpGet("profile")]
    public Task<IActionResult> GetScqasoProfile(CancellationToken ct) =>
        WithProfileAsync(profile => Task.FromResult<object>(new { profile.county, profile.subCounty }), ct);

    // 2. Get Dashboard Stats
    [HttpGet("dashboard-stats")]
    public Task<IActionResult> GetScqasoStats(CancellationToken ct) =>
        WithProfileAsync(profile => workflow.GetScqasoDashboardStatsAsync(profile, ct), ct);

    // 3. Get Inspected Schools
    [HttpGet("inspected-schools")]
    public Task<IActionResult> GetInspectedSchools(CancellationToken ct) =>
        WithProfileAsync(profile => workflow.GetScqasoSchoolsAsync(profile, approved: true, ct), ct);

    // 4. Get Pending Inspections
    [HttpGet("pending-inspections")]
    public Task<object> GetPendingInspections(CancellationToken ct) =>
        _workflow.GetPendingInspectionsAsync(userId, ct);

    // 5. Submit Recommendation
    [HttpPost("submit-inspection")]
    public Task<IActionResult> SubmitInspectionAsync ([FromBody] SubmitInspectionRequest req, CancellationToken ct) =>
        _workflow.SubmitInspectionAsync(userId, req, ct);

    // 6. Get Supervisor (SCDE) Comments
    [HttpGet("comments/{institutionId}")]
    public async Task<IActionResult> GetComments(int institutionId)
    {
        var comment = await _context.InstitutionComments
            .Where(c => c.institutionId == institutionId && _context.Users.Any(u => u.userId == c.userId && u.role == "Sub-County Director of Education (SCDE)"))
            .OrderByDescending(c => c.createdAt)
            .FirstOrDefaultAsync();

        return Ok(new { commentText = comment?.commentText ?? "No comments available." });
    }

    // 7. Upload Report
    [HttpPost("upload-report")]
    public async Task<IActionResult> UploadReport([FromForm] int institutionId, [FromForm] string inspectionDate)
    {
        var school = await _context.BasicEducations.FindAsync(institutionId);
        if (school != null)
        {
            school.updatedAt = DateTime.UtcNow.ToString("o"); 
            await _context.SaveChangesAsync();
        }
        return Ok(new { message = "Report uploaded" });
    }

    private async Task<IActionResult> WithProfileAsync(
        Func<dotnet_backend.Models.User, Task<object>> action, CancellationToken ct)
    {
        if (!int.TryParse(User.FindFirstValue(ClaimTypes.NameIdentifier), out var userId))
            return Unauthorized();

        var profile = await workflow.GetScqasoProfileAsync(userId, ct);
        if (profile == null)
            return NotFound(new { message = "No active SCQASO profile with a county and sub-county was found." });

        return Ok(await action(profile));
    }
}