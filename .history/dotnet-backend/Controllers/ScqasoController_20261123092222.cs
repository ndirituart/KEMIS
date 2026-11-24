using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Authorize(Roles = InstitutionWorkflowService.ScqasoRole)]
[Route("api/sub-county-quality-assurance")]
public class ScqasoController(InstitutionWorkflowService workflow) : ControllerBase
{
    [HttpGet("profile")]
    public Task<IActionResult> GetScqasoProfile(CancellationToken ct) =>
        WithProfileAsync(profile => Task.FromResult<object>(new { profile.county, profile.subCounty }), ct);

    [HttpGet("dashboard-stats")]
    public Task<IActionResult> GetScqasoStats(CancellationToken ct) =>
        WithProfileAsync(profile => workflow.GetScqasoDashboardStatsAsync(profile, ct), ct);

    [HttpGet("inspected-schools")]
    public Task<IActionResult> GetInspectedSchools(CancellationToken ct) =>
        WithProfileAsync(profile => workflow.GetScqasoSchoolsAsync(profile, approved: true, ct), ct);

        // 1. Get Pending Inspections
    [HttpGet("pending-inspections")]
    public Task<object> GetPendingInspections(CancellationToken ct) =>
        _workflow.GetPendingInspectionsAsync(userId, ct);

    // 2. Submit Recommendation
    [HttpPost("submit-inspection")]
    public Task<IActionResult> SubmitInspection([FromBody] SubmitInspectionRequest req, CancellationToken ct) =>
        _workflow.SubmitInspectionAsync(userId, req, ct);

    // 3. Get Supervisor (SCDE) Comments
    [HttpGet("comments/{institutionId}")]
    public async Task<IActionResult> GetComments(int institutionId)
    {
        // Fetch the latest comment by an SCDE for this school
        var comment = await _context.InstitutionComments
            .Where(c => c.institutionId == institutionId && _context.Users.Any(u => u.userId == c.userId && u.role == "Sub-County Director of Education (SCDE)"))
            .OrderByDescending(c => c.createdAt)
            .FirstOrDefaultAsync();

        return Ok(new { commentText = comment?.commentText ?? "No comments available." });
    }

    // 4. Upload Report (Simplified for now to just update the date, file logic added later)
    [HttpPost("upload-report")]
    public async Task<IActionResult> UploadReport([FromForm] int institutionId, [FromForm] string inspectionDate)
    {
        var school = await _context.BasicEducations.FindAsync(institutionId);
        if (school != null)
        {
            school.updatedAt = DateTime.UtcNow.ToString("o"); // Or save inspectionDate to a new column
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
