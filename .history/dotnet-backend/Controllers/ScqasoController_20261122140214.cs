using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/sub-county-quality-assurance")]
public class ScqasoController : ControllerBase
{
    private readonly InstitutionWorkflowService _workflow;

    public ScqasoController(InstitutionWorkflowService workflow)
    {
        _workflow = workflow;
    }

    private int userId 
    {
        get 
        {
            var claim = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return claim != null ? int.Parse(claim) : 147; //hardcoded for now
        }
    }

    // Get SCQASO Profile
    [HttpGet("profile")]
    public Task<SubCountyQualityAssurance> GetScqasoProfile(CancellationToken ct) =>
        _workflow.GetScqasoProfileAsync(userId, ct);

    // Get SCQASO Dashboard Stats
    [HttpGet("dashboard-stats")]
    public Task<object> GetScqasoStats(CancellationToken ct) =>
        _workflow.GetScqasoDashboardStatsAsync(userId, ct);
}