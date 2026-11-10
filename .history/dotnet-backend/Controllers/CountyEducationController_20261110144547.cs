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