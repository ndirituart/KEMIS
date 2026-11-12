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

    // ==========================================
    // 1. DASHBOARD METHODS (Used by Controller)
    // ==========================================

    // Get CDE Profile (Returns the CountyEducation model with the User loaded)
    public async Task<CountyEducation> GetCdeProfileAsync(int userId, CancellationToken ct)
    {
        var cdeMapping = await _context.CountyEducations
            .Include(c => c.User) // Loads the User (CDE)
            .FirstOrDefaultAsync(c => c.userId == userId && c.isActive, ct);

        if (cdeMapping == null) 
            throw new Exception("CDE profile not found.");

        return cdeMapping;
    }

    // Get Schools by County
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
                s. instituionType,
                s.institutionLevel,
                s.status,
                s.cluster, //to classify with cluster later on
                s.subCounty,
                s.totalLearners,
                s.createdAt,
                s.certificateNumber,
                s.mobileNo
            }).ToList()
        };
    }


    // ==========================================
    // 2. SPECIFIC SCHOOL METHODS
    // ==========================================

    // Get School Details
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

    // ==========================================
    // 3. WORKFLOW METHODS (Assign, Comment, Decide)
    // ==========================================

    // Get Assignees (SCDEs)
    public async Task<List<UserSummary>> GetAssigneesAsync(int userId, AssignmentRole role, CancellationToken ct)
    {
        string roleName = role == AssignmentRole.SCDE ? "Sub-County Director of Education (SCDE)" : "County Quality Assurance and Standards Officer (CQASO)";
        
        return await _context.Users
            .Where(u => u.role == roleName && u.status == "active")
            .Select(u => new UserSummary(u.userId, u.fullName, u.role))
            .ToListAsync(ct);
    }

    // Assign a School to an SCDE
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

    // Add a Comment
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

    // Make the final decision (CDE)
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