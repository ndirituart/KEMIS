using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/sub-county-education")]
[Authorize(Roles = "Sub-County Director of Education (SCDE)")]
public class SubCountyEducationController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly InstitutionWorkflowService _workflow;

    public SubCountyEducationController(ApplicationDbContext context, InstitutionWorkflowService workflow)
    {
        _context = context;
        _workflow = workflow;
    }

    private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    // 0. Get SCDE Profile details
    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile(CancellationToken ct)
    {
        var profile = await _workflow.GetScdeProfileAsync(userId, ct);
        if (profile == null) return NotFound("No active sub-county profile is linked to this account.");
        return Ok(profile);
    }

    [HttpGet("dashboard-stats")]
    public async Task<IActionResult> GetDashboardStats(CancellationToken ct)
    {
        var stats = await _workflow.GetScdeDashboardStatsAsync(userId, ct);
        if (stats == null) return NotFound("No active sub-county profile is linked to this account.");
        return Ok(stats);
    }

    //2. Get schools by Sub-County
    [AllowAnonymous]
    [HttpGet("institutions")]
    public Task<object> GetSchoolsBySubCounty([FromQuery] string subCounty, [FromQuery] string? status, [FromQuery] string? county, CancellationToken ct) =>
        _workflow.GetSchoolsBySubCountyAsync(subCounty, status, ct, county);
        

    // 3. Fetches all schools that the CDE has assigned to this specific SCDE
    [HttpGet("assigned-schools")]
    public async Task<IActionResult> GetAssignedSchools()
    {
        var schools = await _context.AssignedSchools
            .Where(a => a.assigneeId == userId)
            .Join(_context.BasicEducations,
                a => a.institutionId,
                s => s.institutionId,
                (a, s) => new
                {
                    s.institutionId,
                    s.institutionName,
                    s.county,
                    s.subCounty,
                    s.status,
                    hasReport = _context.InstitutionAssignments.Any(i => i.institutionId == s.institutionId && i.hasReport)
                })
            .ToListAsync();

        return Ok(schools);
    }

    // 3. Assign a school to a SCQASO
    [HttpGet("scqasos")]
    public async Task<IActionResult> GetScqasos(CancellationToken ct)
    {
        var scde = await _workflow.GetScdeProfileAsync(userId, ct);
        if (scde == null) return NotFound("SCDE not found.");

        var county = scde.county.Trim().ToLowerInvariant();
        var subCounty = scde.subCounty.Trim().ToLowerInvariant();
        var scqasos = await _context.Users
            .Where(u => u.role == InstitutionWorkflowService.ScqasoRole && u.status == "active" &&
                u.deletedAt == null && u.county.Trim().ToLower() == county && u.subCounty.Trim().ToLower() == subCounty)
            .OrderBy(u => u.fullName)
            .Select(u => new { u.userId, u.fullName, u.role })
            .ToListAsync(ct);

        return Ok(scqasos);
    }

    [HttpPost("institutions/{id:int}/assign-scqaso")]
    public Task<IActionResult> AssignSCQASO(int id, [FromBody] AssignRequest req, CancellationToken ct) =>
        _workflow.AssignScqasoAsync(id, userId, req, ct);

    [HttpGet("institutions/{id:int}")]
    public Task<IActionResult> Detail(int id, CancellationToken ct) =>
        _workflow.GetDirectorDetailAsync(id, userId, false, ct);

    [HttpGet("institutions/{id:int}/inspection-report/{commentId:int}")]
    public Task<IActionResult> InspectionReport(int id, int commentId, CancellationToken ct) =>
        _workflow.GetInspectionFileAsync(id, commentId, userId, false, ct);

    [HttpPost("reports")]
    public Task<IActionResult> SubmitReport([FromBody] SubmitReportRequest request, CancellationToken ct) =>
        _workflow.ReviewInspectionAsync(userId, request, ct);

    // 4. Fetch all reports previously submitted by this SCDE
    [HttpGet("reports")]
    public async Task<ActionResult<IEnumerable<Report>>> GetMyReports()
    {
        var reports = await _context.Reports
            .AsNoTracking()
            .Where(r => r.scdeId == userId)
            .OrderByDescending(r => r.createdAt)
            .Select(r => new Report
            {
                reportId = r.reportId,
                institutionId = r.institutionId,
                institutionName = _context.BasicEducations
                    .Where(s => s.institutionId == r.institutionId)
                    .Select(s => s.institutionName)
                    .FirstOrDefault() ?? "Unknown",
                summary = r.summary,
                recommendation = r.recommendation,
                status = r.status,
                createdAt = r.createdAt
            })
            .ToListAsync();

        return Ok(reports);
    }
}