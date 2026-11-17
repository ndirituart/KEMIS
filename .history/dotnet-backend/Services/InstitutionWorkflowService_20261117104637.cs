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

   //A. DASHBOARD METHODS

    //1.  Get CDE Profile (Returns the CountyEducation model with the User loaded)
    public async Task<CountyEducation> GetCdeProfileAsync(int userId, CancellationToken ct)
    {
        var cdeMapping = await _context.CountyEducations
            .Include(c => c.User) // Loads the UserId after login
            .FirstOrDefaultAsync(c => c.userId == userId && c.isActive, ct);

        if (cdeMapping == null) 
            throw new Exception("CDE profile not found.");

        return cdeMapping;
    }

    // 2. Get Schools by County
        public async Task<object> GetSchoolsByCountyAsync(string county, string? status, CancellationToken ct)
    {
        var query = _context.BasicEducations.Where(s => s.county == county);

        // If the user selects a specific status (e.g., "Pending" or "Assigned SCDE"), filter by it
        if (!string.IsNullOrEmpty(status) && status != "All" && status != "Select")
        {
            query = query.Where(s => s.status == status);
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
                s.certificateNumber,
                s.cluster,
                s.headOfInstitution
            }).ToList()
        };
    }

    public async Task<SubCountyEducation> GetScdeProfileAsync(int userId, CancellationToken ct)
    {
        var scdeMapping = await _context.SubCountyEducation
            .FirstOrDefaultAsync(s => s.userId == userId && s.isActive, ct);

        if (scdeMapping == null) 
            throw new Exception("SCDE profile not found for this user.");

        return scdeMapping;
    }

    // 3. Get SCDE Dashboard Stats
    public async Task<object> GetScdeDashboardStatsAsync(int userId, CancellationToken ct)
    {
        var scde = await _context.SubCountyEducation
            .FirstOrDefaultAsync(s => s.userId == userId && s.isActive, ct);

        if (scde == null) 
            return new { error = "SCDE not found" };

        var subCounty = scde.subCounty;

        var schools = await _context.BasicEducations
            .Where(s => s.subCounty == subCounty)
            .ToListAsync(ct);

        var pendingSCDE = schools.Count(s => s.status == "Pending" || s.status == "pending");
        var recommended = schools.Count(s => s.status == "SCDE Recommended" || s.status == "SCQASO Recommended");
        
        var assigned = await _context.InstitutionAssignments
            .CountAsync(a => a.status == "pending" && _context.BasicEducations.Any(s => s.institutionId == a.institutionId && s.subCounty == subCounty), ct);

        return new
        {
            subCountyName = subCounty,
            stats = new
            {
                totalApplications = pendingSCDE,
                totalInstitutions = recommended,
                schoolsReceived = assigned,
                totalLearners = schools.Sum(s => s.totalLearners),
                subjectCombinations = 0
            }
        };
    }

    // 4. Get schools by Sub-County (For SCDEs)
    public async Task<object> GetSchoolsBySubCountyAsync(string subCounty, string? status, CancellationToken ct)
    {
        var query = _context.BasicEducations.Where(s => s.subCounty == subCounty);

        if (!string.IsNullOrEmpty(status) && status != "All" && status != "Select")
        {
            query = query.Where(s => s.status == status);
        }

        var schools = await query.ToListAsync(ct);

        return new
        {
            subCounty = subCounty,
            schools = schools.Select(s => new
            {
                s.institutionId,
                s.institutionName,
                s.certificateNumber,
                s.createdAt,
                s.subCounty,
                s.status,
                s.supervisorId,       
                s.institutionType,    
                s.institutionLevel,   
                s.totalLearners,
                s.headOfInstitution,
                s.emailId,
                s.mobileNo,
                s.constituency,
                s.schoolCategory
            }).ToList()
        };
    }




    //FETCHING SCHOOLS

    // 1. Get School Details
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

   //SCHOOLS WORKFLOW FROM HOI, CDE, SCDE, SCQASO

    //1.  Get Assignees (SCDEs)
    public async Task<List<UserSummary>> GetAssigneesAsync(int userId, AssignmentRole role, CancellationToken ct)
    {
        string roleName = role == AssignmentRole.SCDE ? "Sub-County Director of Education (SCDE)" : "County Quality Assurance and Standards Officer (CQASO)";
        
        return await _context.Users
            .Where(u => u.role == roleName && u.status == "active")
            .Select(u => new UserSummary(u.userId, u.fullName, u.role))
            .ToListAsync(ct);
    }
    
    //2. Assign an SCDE (Done by CDE)
    public async Task<InstitutionDetail> AssignScdeAsync(int id, int userId, AssignRequest req, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(id);
        if (school == null) throw new Exception("School not found");

        // Update BasicEducation table, created a separate row to track the assignee though SupervisorId
        school.status = "Assigned SCDE";
        school.supervisorId = req.assigneeId; // SCDE becomes supervisor
        school.updatedAt = DateTime.UtcNow.ToString("o");

        //Save to AssignedSchools table
        var assignedSchool = new AssignedSchool
        {
            institutionId = id,
            assigneeId = req.assigneeId,
            assignerId = userId,
            institutionName = school.institutionName,
            county = school.county,
            subCounty = school.subCounty,
            status = "pending",
            hasReport = false,
            createdDate = DateTime.UtcNow.ToString("o")
        };
        _context.AssignedSchools.Add(assignedSchool);

        await _context.SaveChangesAsync(ct);
        return await GetDetailAsync(id, userId, ct);
    }

    //3. Assign SCQASO (Called by SCDE)
    // ==========================================
    public async Task<InstitutionDetail> AssignScqasoAsync(int id, int userId, AssignRequest req, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(id);
        if (school == null) throw new Exception("School not found");

        // 1. Update BasicEducation (Do NOT overwrite supervisorId)
        school.status = "Assigned SCQASO";
        school.updatedAt = DateTime.UtcNow.ToString("o");

        // 2. Save to InstitutionAssignments table
        var assignment = new InstitutionAssignment
        {
            institutionId = id,
            assigneeId = req.assigneeId, // SCQASO
            assignerId = userId,         // SCDE
            status = "pending",
            hasReport = false,
            assignedAt = DateTime.UtcNow.ToString("o")
        };
        _context.InstitutionAssignments.Add(assignment);

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