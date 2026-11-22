using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/sub-county-quality-assurance")]
public class ScqasoController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly InstitutionWorkflowService _workflow;

    public ScqasoController(ApplicationDbContext context, InstitutionWorkflowService workflow)
    {
        _context = context;
         _workflow = workflow;
    }

    private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

        // Get SCQASO Profile
    [HttpGet("profile")]
    public Task<SubCountyQualityAssurance> GetScqasoProfile(CancellationToken ct) =>
        _workflow.GetScqasoProfileAsync(userId, ct);

    // Get SCQASO Dashboard Stats
    [HttpGet("dashboard-stats")]
    public Task<object> GetScqasoStats(CancellationToken ct) =>
        _workflow.GetScqasoDashboardStatsAsync(userId, ct);
}