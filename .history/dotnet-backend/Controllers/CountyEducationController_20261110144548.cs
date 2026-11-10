using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/county-education")]
//[Authorize(Roles = "County Director of Education (CDE)")] 
public class CountyEducationController : ControllerBase
{
    private readonly InstitutionWorkflowService _workflow;

    public CountyEducationController(InstitutionWorkflowService workflow)
    {
        _workflow = workflow;
    }

        // 1. Get CDE Profile (Just the County data from CountyEducation table)
    public async Task<CountyEducation> GetCdeProfileAsync(int userId, CancellationToken ct)
    {
        var cdeMapping = await _context.CountyEducations
            .FirstOrDefaultAsync(c => c.userId == userId && c.isActive, ct);

        if (cdeMapping == null) 
            throw new Exception("CDE profile not found for this user.");

        return cdeMapping;
    }

    // 2. Get Schools by County
    public async Task<object> GetSchoolsByCountyAsync(string county, string? status, CancellationToken ct)
    {
        var query = _context.BasicEducations.Where(s => s.county == county);

        if (!string.IsNullOrEmpty(status) && status != "All")
        {
            query = query.Where(s => s.status == status.ToLower());
        }

        var schools = await query.ToListAsync(ct);

        return new
        {
            county = county,
            schools = schools.Select(s => new
            {
                s.institutionId,
                s.institutionName,
                s.status,
                s.subCounty,
                s.totalLearners,
                s.createdAt,
                s.certificateNumber
            }).ToList()
        };
    }

    // ==========================================
    // 2. SPECIFIC SCHOOL ENDPOINTS (For Modals)
    // ==========================================

    // Get School Details by ID
    [HttpGet("institutions/{id:int}")]
    public Task<InstitutionDetail> Detail(int id, CancellationToken ct) =>
        _workflow.GetDetailAsync(id, userId, ct);


    // ==========================================
    // 3. ASSIGNEES & WORKFLOW ENDPOINTS
    // ==========================================

    // Get list of SCDEs to assign a school to
    [HttpGet("assignees")]
    public Task<List<UserSummary>> Assignees([FromQuery] AssignmentRole role, CancellationToken ct) =>
        _workflow.GetAssigneesAsync(userId, role, ct);

    // Assign a school to an SCDE
    [HttpPost("institutions/{id:int}/assign")]
    public Task<InstitutionDetail> Assign(int id, [FromBody] AssignRequest req, CancellationToken ct) =>
        _workflow.AssignAsync(id, userId, req, ct);

    // Add a comment to a school
    [HttpPost("institutions/{id:int}/comments")]
    public Task<InstitutionDetail> Comment(int id, [FromBody] CommentRequest req, CancellationToken ct) =>
        _workflow.AddCommentAsync(id, userId, req, ct);

    // Make a decision (Approve/Reject)
    [HttpPost("institutions/{id:int}/final-decision")]
    public Task<InstitutionDetail> FinalDecision(int id, [FromBody] DecisionRequest req, CancellationToken ct) =>
        _workflow.FinalDecisionAsync(id, userId, req, ct);
}