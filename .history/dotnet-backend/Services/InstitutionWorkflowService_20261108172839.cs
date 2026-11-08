//Handles schools status (approval/denial) and assignment of schools to SCDEs by CDEs
using dotnet_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc; //  Fixes the IActionResult error, rememeber this!

namespace dotnet_backend.Services;

public class InstitutionWorkflowService
{
    private readonly ApplicationDbContext _context;

    public InstitutionWorkflowService(ApplicationDbContext context)
    {
        _context = context;
    }

    // 1. Get Pending Schools in the CDE's County
    public async Task<List<PendingInstitution>> GetPendingAsync(int userId, CancellationToken ct)
    {
        // Find the CDE's county based on their userId
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<PendingInstitution>();

        // Fetch pending schools in that county
        return await _context.BasicEducations
            .Where(s => s.county == cde.county && s.status == "pending")
            .Select(s => new PendingInstitution(
                s.institutionId, 
                s.institutionName, 
                s.county, 
                s.subCounty, 
                s.status
            ))
            .ToListAsync(ct);
    }

    // 2. Get Approved Schools in the CDE's County
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
                s.updatedAt ?? s.createdAt // Use updatedAt as the approval date
            ))
            .ToListAsync(ct);
    }

    // 3. Get Rejected Schools in the CDE's County
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
                s.rejectionReason ?? "No reason provided"
            ))
            .ToListAsync(ct);
    }

    // 4. Get School Details (Including Comments & Decisions)
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
            .Select(s => new PendingInstitution(s.institutionId, s.institutionName, s.county, s.subCounty, s.status))
            .ToListAsync(ct);
    }

    // 6. Get Schools by Sub-County
    public async Task<List<PendingInstitution>> GetSubCountyAsync(string subCountyName, int userId, CancellationToken ct)
    {
        var cde = await _context.Users.FindAsync(userId);
        if (cde == null) return new List<PendingInstitution>();

        return await _context.BasicEducations
            .Where(s => s.county == cde.county && s.subCounty == subCountyName && s.status == "pending")
            .Select(s => new PendingInstitution(s.institutionId, s.institutionName, s.county, s.subCounty, s.status))
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

        // Save assignment using the unified table
        var assignment = new InstitutionAssignment
        {
            institutionId = id,
            assigneeId = req.assigneeId,
            assignerId = userId, // The CDE making the request
            status = "pending",
            hasReport = false,
            assignedAt = DateTime.UtcNow.ToString("o")
        };
        
        _context.InstitutionAssignments.Add(assignment);
        
        // Update school status to show it is being reviewed
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

    // 11. CDE Final Decision (Approve/Reject)
    public async Task<IActionResult> SubmitReport(SubmitReportRequest req, int scdeId)
{
    // 1. Create the report
    var report = new Report
    {
        institutionId = req.institutionId,
        scdeId = scdeId,
        institutionName = "School Name...", // You can fetch this from BasicEducation
        summary = req.summary,
        recommendation = req.Recommendation,
        status = "submitted",
        createdAt = DateTime.UtcNow.ToString("o")
    };
    _context.Reports.Add(report);

    // 2.  UPDATE THE hasReport FLAG IN Assignments
    var assignment = await _context.InstitutionAssignments
        .FirstOrDefaultAsync(a => a.institutionId == req.institutionId && a.assigneeId == scdeId);
    
    if (assignment != null)
    {
        assignment.hasReport = true; // Links institution to the report
        assignment.status = "completed"; // Mark the assignment as done
    }

    await _context.SaveChangesAsync();
    return Ok("Report submitted successfully.");
}
}