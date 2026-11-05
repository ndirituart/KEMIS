using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using KemisOnboarding.Api.Dto;
using KemisOnboarding.Api.Models;
using KemisOnboarding.Api.Services;

namespace KemisOnboarding.Api.Controllers;

[ApiController]
[Route("api/county-education")]
[Authorize(Roles = AppRoles.CountyEducation)]
public class CountyEducationController    : ControllerBase
{
    private readonly InstitutionWorkflowService _workflow;

    public CountyEducationController   (InstitutionWorkflowService workflow)
    {
        _workflow = workflow;
    }

    private Guid userId => Guid.Parse(User.FindFirstValue("sub")!);


//1. Get ALL schools in logged in County
 [HttpGet("institutions")]
    public Task<List<PendingInstitutionDto>> Pending(CancellationToken ct) =>
        _workflow.GetPendingAsync(userId, ct);

//2. Get ALL approved schools in a county
 [HttpGet("institutions/approved")]
    public Task<List<ApprovedInstitutionDto>> Approved(CancellationToken ct) =>
        _workflow.GetApprovedAsync(userId, ct);
    [HttpGet("institutions/pending")]
    public Task<List<PendingInstitutionDto>> Pending(CancellationToken ct) =>
        _workflow.GetPendingAsync(userId, ct);

    [HttpGet("institutions/{id:int}")]
    public Task<InstitutionDetail> Detail(int id, CancellationToken ct) =>
        _workflow.GetDetailAsync(id, userId, ct);

    [HttpGet("assignees")]
    public Task<List<UserSummary>> Assignees([FromQuery] AssignmentRole role, CancellationToken ct) =>
        _workflow.GetAssigneesAsync(userId, role, ct);

    [HttpPost("institutions/{id:int}/assign")]
    public Task<InstitutionDetail> Assign(int id, AssignRequest req, CancellationToken ct) =>
        _workflow.AssignAsync(id, userId, req, ct);

    [HttpPost("institutions/{id:int}/comments")]
    public Task<InstitutionDetail> Comment(int id, CommentRequest req, CancellationToken ct) =>
        _workflow.AddCommentAsync(id, userId, req, ct);

    [HttpPost("institutions/{id:int}/decision")]
    public Task<InstitutionDetail> Decide(int id, DecisionRequest req, CancellationToken ct) =>
        _workflow.DecideAsync(id, userId, req, ct);
}