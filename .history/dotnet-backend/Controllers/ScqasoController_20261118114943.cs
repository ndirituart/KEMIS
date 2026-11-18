using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/Learners")]
public class ScqasoController : ControllerBase
{
    private readonly ApplicationDbContext _context;
     private readonly InstitutionWorkflowService _workflow;

    public ScqasoController(ApplicationDbContext context)
    {
        _context = context;
    }

        // Get SCQASO Profile
    [HttpGet("scqaso-profile")]
    public Task<SubCountyQualityAssurance> GetScqasoProfile(CancellationToken ct) =>
        _workflow.GetScqasoProfileAsync(userId, ct);

    // Get SCQASO Dashboard Stats
    [HttpGet("scqaso-stats")]
    public Task<object> GetScqasoStats(CancellationToken ct) =>
        _workflow.GetScqasoDashboardStatsAsync(userId, ct);
}