using dotnet_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_backend.Services;

public class InstitutionWorkflowService
{
    private readonly ApplicationDbContext _context;

    public InstitutionWorkflowService(ApplicationDbContext context)
    {
        _context = context;
    }

    // 0. Get ALL schools in the CDE's county (No status filter)
    public async Task<List<PendingInstitution>> GetAllAsync(int userId, CancellationToken ct)
    {
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<PendingInstitution>();

        return await _context.BasicEducations
            .Where(s => s.county == cde.county)
            .Select(s => new PendingInstitution(
                s.institutionId, 
                s.institutionName, 
                s.county, 
                s.subCounty, 
                s.status,
                s.createdAt, // Date of onboarding
                s.certificateNumber ?? "N/A" // Institution No
            ))
            .ToListAsync(ct);
    }

    // 1. Get Pending Schools in the CDE's County
    public async Task<List<PendingInstitution>> GetPendingAsync(int userId, CancellationToken ct)
    {
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<PendingInstitution>();

        return await _context.BasicEducations
            .Where(s => s.county == cde.county && s.status == "pending")
            .Select(s => new PendingInstitution(
                s.institutionId, 
                s.institutionName, 
                s.county, 
                s.subCounty, 
                s.status,
                s.createdAt, 
                s.certificateNumber ?? "N/A"
            ))
            .ToListAsync(ct);
    }

    // 2. Get Approved Schools
    public async Task<List<ApprovedInstitution>> GetApprovedAsync(int userId, CancellationToken ct)
    {
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<ApprovedInstitution>();

        return await _context.BasicEducations
            .Where(s => s.county == cde.county && s.status == "approved")
            .Select(s => new ApprovedInstitution(
                s.institutionId, 
                s.institutionName, 
                s.county, 
                s.subCounty, 
                s.status, 
                s.updatedAt ?? s.createdAt
            ))
            .ToListAsync(ct);
    }

    // 3. Get Rejected Schools
    public async Task<List<RejectedInstitution>> GetRejectedAsync(int userId, CancellationToken ct)
    {
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<RejectedInstitution>();

        return await _context.BasicEducations
            .Where(s => s.county == cde.county && s.status == "rejected")
            .Select(s => new RejectedInstitution(
                s.institutionId, 
                s.institutionName, 
                s.county, 
                s.status,
                s.rejectionReason ?? "No reason provided"
            ))
            .ToListAsync(ct);
    }

    // 4. Get School Details
    public async Task<InstitutionDetail> GetDetailAsync(int id, int userId, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(id);
        if (school == null) throw new Exception("School not found");

        var comments = await _context.InstitutionComments
            .Where(c => c.institutionId == id)
            .Select(c => new Comment(c.commentId, c.commentText, c.createdAt))
            .ToListAsync(ct);

        var decisions = await _context.InstitutionDecisions
            .Where(d => d.institutionId == id)
            .Select(d => new Decision(d.decisionId, d.isApproved, d.remarks, d.decisionType, d.createdAt))
            .ToListAsync(ct);

        return new InstitutionDetail(school.institutionId, school.institutionName, school.county, school.status, comments, decisions);
    }

    // 5. Get Schools by Cluster
    public async Task<List<PendingInstitution>> GetClusterAsync(string clusterName, int userId, CancellationToken ct)
    {
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<PendingInstitution>();

        return await _context.BasicEducations
            .Where(s => s.county == cde.county && s.constituency == clusterName && s.status == "pending")
            .Select(s => new PendingInstitution(s.institutionId, s.institutionName, s.county, s.subCounty, s.status, s.createdAt, s.certificateNumber ?? "N/A"))
            .ToListAsync(ct);
    }

    // 6. Get Schools by Sub-County
    public async Task<List<PendingInstitution>> GetSubCountyAsync(string subCountyName, int userId, CancellationToken ct)
    {
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<PendingInstitution>();

        return await _context.BasicEducations
            .Where(s => s.county == cde.county && s.subCounty == subCountyName && s.status == "pending")
            .Select(s => new PendingInstitution(s.institutionId, s.institutionName, s.county, s.subCounty, s.status, s.createdAt, s.certificateNumber ?? "N/A"))
            .ToListAsync(ct);
    }

    // 7. Get Assignees (SCDEs)
    public async Task<List<UserSummary>> GetAssigneesAsync(int userId, AssignmentRole role, CancellationToken ct)
    {
        string roleName = role == AssignmentRole.SCDE ? "Sub-County Director of Education (SCDE)" : "County Quality Assurance and Standards Officer (CQASO)";
        
        return await _context.Users
            .Where(u => u.role == roleName && u.status == "active")
            .Select(u => new UserSummary(u.userId, u.fullName, u.role))
            .ToListAsync(ct);
    }

    // 8. Assign a School to an SCDE
    public async Task<InstitutionDetail> AssignAsync(int id, int userId, AssignRequest req, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(id);
        if (school == null) throw new Exception("School not found");

        var assignment = new InstitutionAssignment
        {
            institutionId = id,
            assigneeId = req.assigneeId,
            assignerId = userId,
            status = "pending",
            hasReport = false,
            assignedAt = DateTime.UtcNow.ToString("o")
        };
        
        _context.InstitutionAssignments.Add(assignment);
        
        school.status = "under_review";
        school.updatedAt = DateTime.UtcNow.ToString("o");
        
        await _context.SaveChangesAsync(ct);

        return await GetDetailAsync(id, userId, ct);
    }

    // 9. Add a Comment
    public async Task<InstitutionDetail> AddCommentAsync(int id, int userId, CommentRequest req, CancellationToken ct)
    {
        var comment = new InstitutionComment
        {
            institutionId = id,
            userId = userId,
            commentText = req.comment,
            createdAt = DateTime.UtcNow.ToString("o")
        };
        _context.InstitutionComments.Add(comment);
        await _context.SaveChangesAsync(ct);

        return await GetDetailAsync(id, userId, ct);
    }

    // 10. SCDE Decision (Recommendation)
    public async Task<InstitutionDetail> DecideAsync(int id, int userId, DecisionRequest req, CancellationToken ct)
    {
        var decision = new InstitutionDecision
        {
            institutionId = id,
            userId = userId,
            isApproved = req.isApproved,
            remarks = req.remarks,
            decisionType = "SCDE Recommendation",
            createdAt = DateTime.UtcNow.ToString("o")
        };
        _context.InstitutionDecisions.Add(decision);

        var school = await _context.BasicEducations.FindAsync(id);
        if (school != null)
        {
            school.status = "recommendation_pending";
            school.updatedAt = DateTime.UtcNow.ToString("o");
        }

        await _context.SaveChangesAsync(ct);
        return await GetDetailAsync(id, userId, ct);
    }

    // 11. Submit Report
    public async Task SubmitReportAsync(SubmitReportRequest req, int scdeId)
    {
        var report = new Report
        {
            institutionId = req.institutionId,
            scdeId = scdeId,
            institutionName = "School Name...", 
            summary = req.summary,
            recommendation = req.recommendation,
            status = "submitted",
            createdAt = DateTime.UtcNow.ToString("o")
        };
        
        _context.Reports.Add(report);

        var assignment = await _context.InstitutionAssignments
            .FirstOrDefaultAsync(a => a.institutionId == req.institutionId && a.assigneeId == scdeId);
        
        if (assignment != null)
        {
            assignment.hasReport = true; 
            assignment.status = "completed"; 
        }

        await _context.SaveChangesAsync();
    }

    // 12. Make the final decision (CDE)
    public async Task<InstitutionDetail> FinalDecisionAsync(int id, int userId, DecisionRequest req, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(id);
        if (school == null) throw new Exception("School not found");

        school.status = req.isApproved ? "approved" : "rejected";
        if (!req.isApproved) school.rejectionReason = req.rejectionReason ?? req.remarks;
        school.updatedAt = DateTime.UtcNow.ToString("o");

        var decision = new InstitutionDecision
        {
            institutionId = id,
            userId = userId,
            isApproved = req.isApproved,
            remarks = req.remarks,
            rejectionReason = req.rejectionReason,
            decisionType = "CDE Final",
            createdAt = DateTime.UtcNow.ToString("o")
        };
        _context.InstitutionDecisions.Add(decision);

        await _context.SaveChangesAsync(ct);

        return await GetDetailAsync(id, userId, ct);
    }
}