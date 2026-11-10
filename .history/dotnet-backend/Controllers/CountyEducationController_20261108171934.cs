using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using dotnet_backend.;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/county-education")]
[Authorize(Roles = "County Director of Education (CDE)")] //only CDEs can access this

public class CountyEducationController : ControllerBase
{
    private readonly InstitutionWorkflowService _workflow;
    // private readonly string apiUrl = "http://localhost:5215/api/county-education";
    public CountyEducationController   (InstitutionWorkflowService workflow)
    {
        _workflow = workflow;
    }

    // private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
private int userId => 3; // <-- Hardcoded for testing


    //1. Get ALL schools in logged in County
    [HttpGet("institutions")]
        public Task<List<PendingInstitution>> Pending(CancellationToken ct) =>
            _workflow.GetPendingAsync(userId, ct);

    //2. Get ALL approved schools in a county
    [HttpGet("institutions/approved")]
        public Task<List<ApprovedInstitution>> Approved(CancellationToken ct) =>
            _workflow.GetApprovedAsync(userId, ct);

    //3. Get ALL rejected schools in a county
        [HttpGet("institutions/rejected")]
        public Task<List<RejectedInstitution>> Rejected(CancellationToken ct) =>
            _workflow.GetRejectedAsync(userId, ct);

    //4. Get ALL pending schools in a county
        [HttpGet("institutions/pending")]
        public Task<List<RejectedInstitution>> Rejected(CancellationToken ct) =>
            _workflow.GetRejectedAsync(userId, ct);

    //4. Get a School by institutionId in a county
        [HttpGet("institutions/{id:int}")]
        public Task<InstitutionDetail> Detail(int id, CancellationToken ct) =>
            _workflow.GetDetailAsync(id, userId, ct);

    //5. Get a School by cluster
        [HttpGet("institutions/cluster/{clusterName}")]
        public Task<List<PendingInstitution>> Cluster(string clusterName, CancellationToken ct) =>
            _workflow.GetClusterAsync(clusterName, userId, ct);

    //6. Get a School by subCounty
        [HttpGet("institutions/subcounty/{subCountyName}")]
        public Task<List<PendingInstitution>> SubCounty(string subCountyName, CancellationToken ct) =>
            _workflow.GetSubCountyAsync(subCountyName, userId, ct);

    //7. Get assignees (SCDEs)        
        [HttpGet("assignees")]
        public Task<List<UserSummary>> Assignees([FromQuery] AssignmentRole role, CancellationToken ct) =>
            _workflow.GetAssigneesAsync(userId, role, ct);

    //8. Get an assignee for a specific school
        [HttpPost("institutions/{id:int}/assign")]
        public Task<InstitutionDetail> Assign(int id, AssignRequest req, CancellationToken ct) =>
            _workflow.AssignAsync(id, userId, req, ct);

    //9. View comments from assignee for a specific school
        [HttpPost("institutions/{id:int}/comments")]
        public Task<InstitutionDetail> Comment(int id, CommentRequest req, CancellationToken ct) =>
            _workflow.AddCommentAsync(id, userId, req, ct);

    //10. View decisions made by an assignee on a specific school
        [HttpPost("institutions/{id:int}/decision")]
        public Task<InstitutionDetail> Decide(int id, DecisionRequest req, CancellationToken ct) =>
            _workflow.DecideAsync(id, userId, req, ct);

    //11. To make the final decision for a school (Approve/Deny) by the County Education Officer
        [HttpPost("institutions/{id:int}/final-decision")]
        public Task<InstitutionDetail> FinalDecision(int id, DecisionRequest req, CancellationToken ct) =>
            _workflow.FinalDecisionAsync(id, userId, req, ct);

}
