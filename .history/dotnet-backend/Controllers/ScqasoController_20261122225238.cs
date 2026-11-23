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

    [HttpGet("pending-inspections")]
    public Task<IActionResult> GetPendingInspections(CancellationToken ct) =>
        WithProfileAsync(profile => workflow.GetScqasoSchoolsAsync(profile, approved: false, ct), ct);

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
