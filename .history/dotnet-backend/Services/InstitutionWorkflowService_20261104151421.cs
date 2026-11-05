//Handles schools status (approval/denial) and assignment of schools to SCDEs by CDEs
using dotnet_backend.Models;

namespace dotnet_backend.Services
{
    public class InstitutionWorkflowService
    {
        private readonly ApplicationDbContext _context;

        public InstitutionWorkflowService(ApplicationDbContext context)
        {
            _context = context;
        }

       
        
        public Task<List<PendingInstitutionDto>> GetPendingAsync(Guid userId, CancellationToken ct) => Task.FromResult(new List<PendingInstitutionDto>());
        public Task<List<ApprovedInstitutionDto>> GetApprovedAsync(Guid userId, CancellationToken ct) => Task.FromResult(new List<ApprovedInstitutionDto>());
        public Task<List<RejectedInstitutionDto>> GetRejectedAsync(Guid userId, CancellationToken ct) => Task.FromResult(new List<RejectedInstitutionDto>());
        public Task<InstitutionDetail> GetDetailAsync(int id, Guid userId, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<CommentDto>(), new List<DecisionDto>()));
        public Task<List<PendingInstitutionDto>> GetClusterAsync(string clusterName, Guid userId, CancellationToken ct) => Task.FromResult(new List<PendingInstitutionDto>());
        public Task<List<PendingInstitutionDto>> GetSubCountyAsync(string subCountyName, Guid userId, CancellationToken ct) => Task.FromResult(new List<PendingInstitutionDto>());
        public Task<List<UserSummary>> GetAssigneesAsync(Guid userId, AssignmentRole role, CancellationToken ct) => Task.FromResult(new List<UserSummary>());
        public Task<InstitutionDetail> AssignAsync(int id, Guid userId, AssignRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<CommentDto>(), new List<DecisionDto>()));
        public Task<InstitutionDetail> AddCommentAsync(int id, Guid userId, CommentRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<CommentDto>(), new List<DecisionDto>()));
        public Task<InstitutionDetail> DecideAsync(int id, Guid userId, DecisionRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<CommentDto>(), new List<DecisionDto>()));
        public Task<InstitutionDetail> FinalDecisionAsync(int id, Guid userId, DecisionRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<CommentDto>(), new List<DecisionDto>()));
    }
}