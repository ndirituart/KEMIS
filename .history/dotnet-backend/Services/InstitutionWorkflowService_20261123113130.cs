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

   //1. Get CDE Profile
    public Task<CountyEducation?> GetCdeProfileAsync(int userId, CancellationToken ct) =>
        _context.CountyEducations.FirstOrDefaultAsync(c => c.userId == userId && c.isActive, ct);

    // 2. Get Schools by County
        public async Task<object> GetSchoolsByCountyAsync(string county, string? status, CancellationToken ct)
    {
        var normalizedCounty = county.Trim().ToLowerInvariant();
        var query = _context.BasicEducations.Where(s => s.county.Trim().ToLower() == normalizedCounty);

        var normalizedStatus = status?.Trim().ToLowerInvariant();
        if (!string.IsNullOrEmpty(normalizedStatus) && normalizedStatus != "all" && normalizedStatus != "select")
        {
            query = query.Where(s => s.status.Trim().ToLower() == normalizedStatus);
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
                s.institutionLevel,
                s.totalLearners,
                s.createdAt,
                s.certificateNumber,
                s.cluster,
                s.headOfInstitution
            }).ToList()
        };
    }

    public Task<SubCountyEducation?> GetScdeProfileAsync(int userId, CancellationToken ct) =>
        _context.SubCountyEducation.FirstOrDefaultAsync(s => s.userId == userId && s.isActive, ct);

    // 3. Get SCDE Dashboard Stats
    public async Task<object?> GetScdeDashboardStatsAsync(int userId, CancellationToken ct)
    {
        var scde = await GetScdeProfileAsync(userId, ct);
        if (scde == null) return null;

        var subCounty = scde.subCounty;
        var normalizedSubCounty = subCounty.Trim().ToLowerInvariant();
        var normalizedCounty = scde.county.Trim().ToLowerInvariant();
        var schoolsInSubCounty = _context.BasicEducations.Where(s =>
            s.subCounty.Trim().ToLower() == normalizedSubCounty &&
            s.county.Trim().ToLower() == normalizedCounty);
        var schools = await schoolsInSubCounty.ToListAsync(ct);

        var pendingSCDE = schools.Count(s => s.status == "Pending" || s.status == "pending");
        var recommended = schools.Count(s => s.status == "SCDE Recommended" || s.status == "SCQASO Recommended");
        
        var assigned = await _context.InstitutionAssignments
            .CountAsync(a => a.status == "pending" && schoolsInSubCounty.Any(s => s.institutionId == a.institutionId), ct);

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
        public async Task<object> GetSchoolsBySubCountyAsync(string subCounty, string? status, CancellationToken ct, string? county = null)
    {
        var normalizedSubCounty = subCounty.Trim().ToLowerInvariant();
        var normalizedCounty = county?.Trim().ToLowerInvariant();
        var query = string.IsNullOrEmpty(normalizedCounty)
            ? _context.BasicEducations.Where(s => s.subCounty.Trim().ToLower().Contains(normalizedSubCounty))
            : _context.BasicEducations.Where(s => s.county.Trim().ToLower() == normalizedCounty &&
                s.subCounty.Trim().ToLower() == normalizedSubCounty);

        var normalizedStatus = status?.Trim().ToLowerInvariant();
        if (string.IsNullOrEmpty(normalizedStatus) || normalizedStatus == "select" || normalizedStatus == "all")
        {
            query = query.Where(s => s.status.Trim().ToLower() != "approved");
        }
        else
        {
            query = query.Where(s => s.status.Trim().ToLower() == normalizedStatus);
        }

        var schools = await query.ToListAsync(ct);

        // Fetch assignments to map the SCQASO ID
        var schoolIds = schools.Select(s => s.institutionId).ToList();
        var assignments = await _context.InstitutionAssignments
            .Where(a => schoolIds.Contains(a.institutionId))
            .OrderByDescending(a => a.assignmentId)
            .ToListAsync(ct);

        return new
        {
            subCounty = subCounty,
            schools = schools.Select(s => 
            {
                // Find the latest SCQASO assignment
                var latestAssignment = assignments.FirstOrDefault(a => a.institutionId == s.institutionId);
                
                return new
                {
                    s.institutionId,
                    s.institutionName,
                    s.certificateNumber,
                    s.createdAt,
                    s.subCounty,
                    s.status,
                    s.supervisorId, // SCDE
                    assigneeId = latestAssignment?.assigneeId, // SCQASO
                    s.institutionType,
                    s.institutionLevel,
                    s.totalLearners,
                    s.headOfInstitution,
                    s.emailId,
                    s.mobileNo,
                    s.constituency,
                    s.schoolCategory,
                    s.cluster 
                };
            }).ToList()
        };
    }


    public const string ScqasoRole = "Sub-County Quality Assurance and Standards Officer (SCQASO)";

    public Task<User?> GetScqasoProfileAsync(int userId, CancellationToken ct) =>
        _context.Users.AsNoTracking().FirstOrDefaultAsync(user =>
            user.userId == userId && user.role == ScqasoRole &&
            user.status == "active" && user.deletedAt == null &&
            user.county.Trim() != "" && user.subCounty.Trim() != "", ct);

    private IQueryable<BasicEducation> GetScqasoAreaSchools(User profile)
    {
        var county = profile.county.Trim().ToLowerInvariant();
        var subCounty = profile.subCounty.Trim().ToLowerInvariant();
        return _context.BasicEducations.AsNoTracking().Where(s =>
            s.county.Trim().ToLower() == county && s.subCounty.Trim().ToLower() == subCounty);
    }

    public async Task<object> GetScqasoDashboardStatsAsync(User profile, CancellationToken ct)
    {
        var statuses = await GetScqasoAreaSchools(profile).Select(s => s.status).ToListAsync(ct);

        return new
        {
            countyName = profile.county,
            subCountyName = profile.subCounty,
            stats = new
            {
                inspectionsDone = statuses.Count(status =>
                    string.Equals(status?.Trim(), "Approved", StringComparison.OrdinalIgnoreCase)),
                schedulePending = statuses.Count(status => status == "SCQASO Recommended"),
                underEvaluation = statuses.Count(status => status == "Assigned SCQASO"),
                recPending = statuses.Count(status => status == "SCDE Recommended"),
                sendBack = statuses.Count(status => status == "SCDE Rejects")
            }
        };
    }

    public async Task<object> GetScqasoSchoolsAsync(User profile, bool approved, CancellationToken ct)
    {
        var schools = await GetScqasoAreaSchools(profile)
            .Where(s => ((s.status ?? "").Trim().ToLower() == "approved") == approved)
            .OrderBy(s => s.institutionName)
            .ThenBy(s => s.institutionId)
            .Select(s => new
            {
                s.institutionId,
                s.certificateNumber,
                s.institutionName,
                s.mobileNo,
                s.institutionType,
                s.institutionLevel,
                s.createdAt,
                s.status,
                s.constituency,
                s.emailId
            })
            .ToListAsync(ct);

        return new { subCounty = profile.subCounty, schools };
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
            status = "",
            hasReport = false,
            createdDate = DateTime.UtcNow.ToString("o")
        };
        _context.AssignedSchools.Add(assignedSchool);

        await _context.SaveChangesAsync(ct);
        return await GetDetailAsync(id, userId, ct);
    }

    //3. Assign SCQASO (Called by SCDE)
    public async Task<InstitutionDetail> AssignScqasoAsync(int id, int userId, AssignRequest req, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(id);
        if (school == null) throw new Exception("School not found");

        // Update BasicEducation. Again another separate row from supervisorId called assineeId
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


    // 4.  Get Pending Inspections (Assigned to this SCQASO)
    public async Task<object> GetPendingInspectionsAsync(int userId, CancellationToken ct)
    {
        // Get the SCQASO's subcounty
        var scqaso = await _context.SubCountyQualityAssurances
            .FirstOrDefaultAsync(s => s.userId == userId && s.isActive, ct);
            
        if (scqaso == null) return new { error = "SCQASO not found" };

        // Get schools assigned to SCQASO (Status = Assigned SCQASO)
        var schools = await _context.BasicEducations
            .Where(s => s.subCounty == scqaso.subCounty && s.status == "Assigned SCQASO")
            .Select(s => new {
                s.institutionId, s.institutionName, s.emailId, s.mobileNo, 
                s.createdAt, s.certificateNumber, s.institutionType, 
                s.institutionLevel, s.status
            })
            .ToListAsync(ct);

        return new { schools };
    }

    // 2. Submit Recommendation (Updates status and comments)
    public async Task<IActionResult> SubmitInspectionAsync(int userId, SubmitInspectionRequest req, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(req.institutionId);
        if (school == null) return new BadRequestObjectResult("School not found");

        // Save the comment
        var comment = new InstitutionComment
        {
            institutionId = req.institutionId,
            userId = userId, // SCQASO
            commentText = req.comment,
            createdAt = DateTime.UtcNow.ToString("o")
        };
        _context.InstitutionComments.Add(comment);

        // Update the status
        school.status = "SCQASO Recommended";
        school.updatedAt = DateTime.UtcNow.ToString("o");

        await _context.SaveChangesAsync(ct);
        return new OkObjectResult(new { message = "Recommendation submitted successfully" });
    }

    // 5.  Make the final decision (CDE)
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