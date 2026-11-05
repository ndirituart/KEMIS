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

       //Temporary. I am not using 
        
        public Task<List<PendingInstitution>> GetPendingAsync(Guid userId, CancellationToken ct) => Task.FromResult(new List<PendingInstitution>());
        public Task<List<ApprovedInstitution>> GetApprovedAsync(Guid userId, CancellationToken ct) => Task.FromResult(new List<ApprovedInstitution>());
        public Task<List<RejectedInstitution>> GetRejectedAsync(Guid userId, CancellationToken ct) => Task.FromResult(new List<RejectedInstitution>());
        public Task<InstitutionDetail> GetDetailAsync(int id, Guid userId, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<Comment>(), new List<Decision>()));
        public Task<List<PendingInstitution>> GetClusterAsync(string clusterName, Guid userId, CancellationToken ct) => Task.FromResult(new List<PendingInstitution>());
        public Task<List<PendingInstitution>> GetSubCountyAsync(string subCountyName, Guid userId, CancellationToken ct) => Task.FromResult(new List<PendingInstitution>());
        public Task<List<UserSummary>> GetAssigneesAsync(Guid userId, AssignmentRole role, CancellationToken ct) => Task.FromResult(new List<UserSummary>());
        public Task<InstitutionDetail> AssignAsync(int id, Guid userId, AssignRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<Comment>(), new List<Decision>()));
        public Task<InstitutionDetail> AddCommentAsync(int id, Guid userId, CommentRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<Comment>(), new List<Decision>()));
        public Task<InstitutionDetail> DecideAsync(int id, Guid userId, DecisionRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<Comment>(), new List<Decision>()));
        public Task<InstitutionDetail> FinalDecisionAsync(int id, Guid userId, DecisionRequest req, CancellationToken ct) => Task.FromResult(new InstitutionDetail(0, "", "", "", new List<Comment>(), new List<Decision>()));
    }
}