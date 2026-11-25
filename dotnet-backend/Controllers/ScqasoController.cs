using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers;

[ApiController]
[Authorize(Roles = "Sub-County Quality Assurance and Standards Officer (SCQASO)")]
[Route("api/sub-county-quality-assurance")]
public class ScqasoController : ControllerBase
{
    private readonly InstitutionWorkflowService _workflow;

    public ScqasoController(InstitutionWorkflowService workflow)
    {
        _workflow = workflow;
    }

    private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
    
    // 1. Get Profile
    [HttpGet("profile")]
    public Task<IActionResult> GetScqasoProfile(CancellationToken ct) =>
        WithProfileAsync(profile => Task.FromResult<object>(new { profile.county, profile.subCounty }), ct);

    // 2. Get Dashboard Stats
    [HttpGet("dashboard-stats")]
    public Task<IActionResult> GetScqasoStats(CancellationToken ct) =>
        WithProfileAsync(profile => _workflow.GetScqasoDashboardStatsAsync(profile, ct), ct);

    // 3. Get Inspected Schools
    [HttpGet("inspected-schools")]
    public Task<IActionResult> GetInspectedSchools(CancellationToken ct) =>
        WithProfileAsync(profile => _workflow.GetScqasoSchoolsAsync(profile, approved: true, ct), ct);

    // 4. Get Pending Inspections
    [HttpGet("pending-inspections")]
    public Task<object> GetPendingInspections(CancellationToken ct) =>
        _workflow.GetPendingInspectionsAsync(userId, ct);

    // 5. Submit Recommendation
    [HttpPost("submit-inspection")]
    public Task<IActionResult> SubmitInspection([FromForm] SubmitInspectionRequest request, CancellationToken ct) =>
        _workflow.SubmitInspectionAsync(userId, request, ct);

    private async Task<IActionResult> WithProfileAsync(
        Func<dotnet_backend.Models.User, Task<object>> action, CancellationToken ct)
    {
        if (!int.TryParse(User.FindFirstValue(ClaimTypes.NameIdentifier), out var userId))
            return Unauthorized();

        var profile = await _workflow.GetScqasoProfileAsync(userId, ct);
        if (profile == null)
            return NotFound(new { message = "No active SCQASO profile with a county and sub-county was found." });

        return Ok(await action(profile));
    }
}