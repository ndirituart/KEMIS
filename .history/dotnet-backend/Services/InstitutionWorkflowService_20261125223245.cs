using dotnet_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_backend.Services;

public class InstitutionWorkflowService
{
    private readonly ApplicationDbContext _context;

    private readonly string _reportFolder;
    private readonly bool _practiceMode;

    public InstitutionWorkflowService(ApplicationDbContext context, IWebHostEnvironment environment)
    {
        _context = context;
        _practiceMode = environment.IsDevelopment();
        _reportFolder = Path.Combine(environment.ContentRootPath, "App_Data", "inspection-reports");
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
        var recommended = schools.Count(s => s.status == "SCDE Approved" || s.status == "SCQASO Recommended");
        
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

        return new
        {
            subCounty = subCounty,
            schools = schools.Select(s => 
            {
                return new
                {
                    s.institutionId,
                    s.institutionName,
                    s.certificateNumber,
                    s.createdAt,
                    s.subCounty,
                    s.status,
                    s.supervisorId, // SCDE
                    s.assigneeId, // SCQASO
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
                    string.Equals(status?.Trim(), "Approved", StringComparison.OrdinalIgnoreCase)),//completed
                schedulePending = statuses.Count(status => status == "Assigned SCQASO"),//yet to be inspected
                underEvaluation = statuses.Count(status => status == "SCQASO Recommended"), //inspected and approved
                recPending = statuses.Count(status => status == "Pending"),
                sendBack = statuses.Count(status => status == "SCDE Rejected")
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
        school.assigneeId = null;
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
            status = "Assigned SCDE",
            hasReport = false,
            createdDate = DateTime.UtcNow.ToString("o")
        };
        _context.AssignedSchools.Add(assignedSchool);

        await _context.SaveChangesAsync(ct);
        return await GetDetailAsync(id, userId, ct);
    }

    //3. Assign SCQASO (Called by SCDE)
    public async Task<IActionResult> AssignScqasoAsync(int id, int userId, AssignRequest req, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(new object[] { id }, ct);
        if (school == null) return new NotFoundResult();
        if (!await CanViewSchoolAsync(school, userId, false, ct) ||
            (school.supervisorId != null && school.supervisorId != userId))
            return new ForbidResult();
        if (school.status is not ("Assigned SCDE" or "Assigned SCQASO" or "SCDE Rejected"))
            return new ConflictObjectResult("This school is not awaiting an inspection assignment.");

        var officer = await GetScqasoProfileAsync(req.assigneeId, ct);
        if (officer == null || !SameArea(officer.county, school.county) || !SameArea(officer.subCounty, school.subCounty))
            return new BadRequestObjectResult("Choose an active inspection officer in the school's county and sub-county.");

        var now = DateTime.UtcNow.ToString("o");
        school.supervisorId ??= userId;
        school.assigneeId = officer.userId;
        school.status = "Assigned SCQASO";
        school.updatedAt = now;

        _context.InstitutionAssignments.Add(new InstitutionAssignment
        {
            institutionId = id,
            assigneeId = officer.userId,
            assignerId = userId,
            status = school.status,
            hasReport = false,
            assignedAt = now
        });
        return await SaveTransitionAsync(ct);
    }

    internal IQueryable<InstitutionAssignment> InspectionAssignments =>
        _context.InstitutionAssignments.Where(a =>
            _context.Users.Any(u => u.userId == a.assigneeId && u.role == ScqasoRole));

    private IQueryable<InstitutionAssignment> Assignments(int id) =>
        InspectionAssignments.Where(a => a.institutionId == id).OrderByDescending(a => a.assignmentId);

    private IQueryable<InstitutionComment> Inspections(int id) =>
        _context.InstitutionComments.Where(c => c.institutionId == id && c.reportFileName != null)
            .OrderByDescending(c => c.commentId);

        public async Task<object> GetPendingInspectionsAsync(int userId, CancellationToken ct)
    {
        // 1. Get the SCQASO's profile to find their subcounty
        var profile = await GetScqasoProfileAsync(userId, ct);
        if (profile == null) return new { schools = Array.Empty<object>() };

        // 2. Query directly from BasicEducations for that subcounty
        // We use .ToLower().Contains() to avoid issues with "Embakasi" vs "Embakasi East Sub County"
        var schools = await _context.BasicEducations
            .Where(s => s.subCounty.ToLower().Contains(profile.subCounty.ToLower()))
            // 3. Filter out the approved schools
            .Where(s => (s.status ?? "").Trim().ToLower() != "approved")
            .OrderByDescending(s => s.institutionId)
            .Select(s => new
            {
                s.institutionId, 
                s.institutionName, 
                s.emailId, 
                s.mobileNo, 
                s.createdAt,
                s.certificateNumber, 
                s.institutionType, 
                s.institutionLevel, 
                s.status,
                s.headOfInsititution,
                s. 
                // Get inspection date from the latest comment with a report
                inspectionDate = _context.InstitutionComments
                    .Where(c => c.institutionId == s.institutionId && c.reportFileName != null)
                    .OrderByDescending(c => c.commentId)
                    .Select(c => c.inspectionDate)
                    .FirstOrDefault(),
                // Just allow submission for now, or apply your complex logic here
                canSubmit = true 
            })
            .ToListAsync(ct);

        return new { schools };
    }

    public async Task<IActionResult> SubmitInspectionAsync(int userId, SubmitInspectionRequest req, CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(req.comment) || req.file is null || req.file.Length == 0)
            return new BadRequestObjectResult("An inspection comment an d report file are required.");
        if (req.file.Length > 10 * 1024 * 1024)
            return new BadRequestObjectResult("The report must be 10 MB or smaller.");
        if (req.inspectionDate != null && !DateOnly.TryParseExact(req.inspectionDate, "yyyy-MM-dd", out _))
            return new BadRequestObjectResult("Enter a valid inspection date.");

        var extension = Path.GetExtension(req.file.FileName).ToLowerInvariant();
        byte[]? signature = extension switch
        {
            ".pdf" => "%PDF-"u8.ToArray(),
            ".jpg" or ".jpeg" => new byte[] { 255, 216, 255 },
            ".png" => new byte[] { 137, 80, 78, 71, 13, 10, 26, 10 },
            _ => null
        };
        if (signature == null)
            return new BadRequestObjectResult("Upload a PDF, JPG or PNG report.");

        var school = await _context.BasicEducations.FindAsync(new object[] { req.institutionId }, ct);
        if (school == null) return new NotFoundResult();
        var assignment = await Assignments(req.institutionId).FirstOrDefaultAsync(ct);
        var profile = await GetScqasoProfileAsync(userId, ct);
        if (profile == null ||
            (!_practiceMode && (!SameArea(profile.county, school.county) || !SameArea(profile.subCounty, school.subCounty))) ||
            (school.assigneeId != null && school.assigneeId != userId) ||
            (assignment != null && assignment.assigneeId != userId))
            return new ForbidResult();
        var missingLegacyReport = school.status == "SCQASO Recommended" &&
            !await Inspections(req.institutionId).AnyAsync(ct);
        if (string.Equals(school.status?.Trim(), "Approved", StringComparison.OrdinalIgnoreCase) ||
            (!_practiceMode && school.status is not ("Assigned SCQASO" or "SCDE Rejected") && !missingLegacyReport) ||
            (school.status == "SCQASO Recommended" && !missingLegacyReport))
            return new ConflictObjectResult("This school is no longer awaiting inspection.");

        await using var input = req.file.OpenReadStream();
        var header = new byte[signature.Length];
        if (await input.ReadAtLeastAsync(header, header.Length, false, ct) != header.Length ||
            !header.AsSpan().SequenceEqual(signature))
            return new BadRequestObjectResult("The report contents do not match the file extension.");

        var now = DateTime.UtcNow.ToString("o");
        var fileName = $"{Guid.NewGuid():N}{extension}";
        Directory.CreateDirectory(_reportFolder);
        var path = Path.Combine(_reportFolder, fileName);
        try
        {
            await using (var output = new FileStream(path, FileMode.CreateNew, FileAccess.Write))
            {
                await output.WriteAsync(header, ct);
                await input.CopyToAsync(output, ct);
            }

            _context.InstitutionComments.Add(new InstitutionComment
            {
                institutionId = req.institutionId,
                userId = userId,
                commentText = req.comment.Trim(),
                reportFileName = fileName,
                inspectionDate = req.inspectionDate,
                createdAt = now
            });
            if (assignment == null)
            {
                assignment = new InstitutionAssignment
                {
                    institutionId = school.institutionId,
                    assigneeId = userId,
                    assignerId = school.supervisorId ?? userId,
                    assignedAt = now
                };
                _context.InstitutionAssignments.Add(assignment);
            }

            school.assigneeId ??= userId;
            school.status = assignment.status = "SCQASO Recommended";
            school.updatedAt = assignment.updatedAt = now;
            assignment.hasReport = true;
            var result = await SaveTransitionAsync(ct);
            if (result is ConflictObjectResult) File.Delete(path);
            return result;
        }
        catch
        {
            File.Delete(path);
            throw;
        }
    }

    public async Task<IActionResult> ReviewInspectionAsync(int userId, SubmitReportRequest req, CancellationToken ct)
    {
        if (req.isApproved is not bool approved)
            return new BadRequestObjectResult("Choose whether to approve or reject the inspection.");
        var reason = req.rejectionReason?.Trim();
        if (!approved && string.IsNullOrEmpty(reason))
            return new BadRequestObjectResult("A rejection reason is required.");

        var school = await _context.BasicEducations.FindAsync(new object[] { req.institutionId }, ct);
        if (school == null) return new NotFoundResult();
        if (school.supervisorId != userId || !await CanViewSchoolAsync(school, userId, false, ct))
            return new ForbidResult();
        if (school.status != "SCQASO Recommended")
            return new ConflictObjectResult("This school is no longer awaiting SCDE review.");

        var assignment = await Assignments(req.institutionId).FirstOrDefaultAsync(ct);
        var inspection = await Inspections(req.institutionId).FirstOrDefaultAsync(ct);
        if (inspection == null || assignment == null || assignment.assigneeId != inspection.userId)
            return new ConflictObjectResult("The assigned officer must submit a report first.");

        var now = DateTime.UtcNow.ToString("o");
        var status = approved ? "SCDE Approved" : "SCDE Rejected";
        _context.Reports.Add(new Report
        {
            institutionId = req.institutionId,
            institutionName = school.institutionName,
            scdeId = userId,
            inspectionCommentId = inspection.commentId,
            summary = approved ? req.summary.Trim() : reason!,
            recommendation = approved ? "Approve" : "Reject",
            status = status,
            createdAt = now
        });
        school.status = assignment.status = status;
        school.updatedAt = assignment.updatedAt = now;
        if (!approved)
        {
            _context.InstitutionComments.Add(new InstitutionComment
            {
                institutionId = req.institutionId,
                userId = userId,
                commentText = reason!,
                createdAt = now
            });
        }
        return await SaveTransitionAsync(ct);
    }

    private async Task<IActionResult> SaveTransitionAsync(CancellationToken ct)
    {
        try
        {
            await _context.SaveChangesAsync(ct);
            return new OkResult();
        }
        catch (DbUpdateConcurrencyException)
        {
            return new ConflictObjectResult("The school status changed. Refresh and try again.");
        }
    }

    public async Task<IActionResult> GetDirectorDetailAsync(int id, int userId, bool countyDirector, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(new object[] { id }, ct);
        if (school == null) return new NotFoundResult();
        if (!await CanViewSchoolAsync(school, userId, countyDirector, ct)) return new ForbidResult();

        var canReview = countyDirector || school.supervisorId == userId;
        var inspection = canReview ? await Inspections(id)
            .Select(c => new { c.commentId, c.commentText, c.inspectionDate }).FirstOrDefaultAsync(ct) : null;
        var review = inspection == null ? null : await _context.Reports.AsNoTracking()
            .Where(r => r.institutionId == id && r.inspectionCommentId == inspection.commentId)
            .OrderByDescending(r => r.reportId).FirstOrDefaultAsync(ct);
        return new OkObjectResult(new { school, school.status, inspection, review, canReview });
    }

    private async Task<bool> CanViewSchoolAsync(BasicEducation school, int userId, bool countyDirector, CancellationToken ct)
    {
        if (countyDirector)
        {
            var profile = await GetCdeProfileAsync(userId, ct);
            return profile != null && SameArea(profile.county, school.county);
        }
        var scde = await GetScdeProfileAsync(userId, ct);
        return scde != null && SameArea(scde.county, school.county) && SameArea(scde.subCounty, school.subCounty);
    }

    private static bool SameArea(string first, string second) =>
        string.Equals(first.Trim(), second.Trim(), StringComparison.OrdinalIgnoreCase);

    public async Task<IActionResult> GetInspectionFileAsync(int id, int commentId, int userId, bool countyDirector, CancellationToken ct)
    {
        var school = await _context.BasicEducations.FindAsync(new object[] { id }, ct);
        if (school == null) return new NotFoundResult();
        if (!await CanViewSchoolAsync(school, userId, countyDirector, ct) ||
            (!countyDirector && school.supervisorId != userId)) return new ForbidResult();

        var fileName = await Inspections(id).Where(c => c.commentId == commentId)
            .Select(c => c.reportFileName).FirstOrDefaultAsync(ct);
        if (fileName == null || fileName != Path.GetFileName(fileName)) return new NotFoundResult();

        var path = Path.Combine(_reportFolder, fileName);
        if (!File.Exists(path)) return new NotFoundObjectResult("Inspection report file could not be found.");
        var mimeType = Path.GetExtension(fileName) switch
        {
            ".pdf" => "application/pdf",
            ".png" => "image/png",
            _ => "image/jpeg"
        };
        return new PhysicalFileResult(path, mimeType) { EnableRangeProcessing = true };
    }

        // Add a Comment (Used by CDE/SCDE/SCQASO)
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

    // 5.  Make the final decision (CDE)
    public async Task<IActionResult> FinalDecisionAsync(int id, int userId, DecisionRequest req, CancellationToken ct)
    {
        if (req.isApproved is not bool approved)
            return new BadRequestObjectResult("Choose whether to approve or reject the institution.");
        var reason = req.rejectionReason?.Trim();
        if (!approved && string.IsNullOrEmpty(reason))
            return new BadRequestObjectResult("A rejection reason is required.");

        var school = await _context.BasicEducations.FindAsync(new object[] { id }, ct);
        if (school == null) return new NotFoundResult();
        if (!await CanViewSchoolAsync(school, userId, true, ct)) return new ForbidResult();
        if (school.status != "SCDE Approved" ||
            !await _context.Reports.AnyAsync(r => r.institutionId == id && r.status == "SCDE Approved" &&
                r.inspectionCommentId != null, ct))
            return new ConflictObjectResult("The SCDE must approve the inspection before the final decision.");

        var now = DateTime.UtcNow.ToString("o");
        school.status = approved ? "Approved" : "Rejected";
        school.rejectionReason = approved ? null : reason;
        school.updatedAt = now;
        _context.InstitutionDecisions.Add(new InstitutionDecision
        {
            institutionId = id,
            userId = userId,
            isApproved = approved,
            remarks = req.remarks,
            rejectionReason = school.rejectionReason,
            decisionType = "CDE Final",
            createdAt = now
        });
        return await SaveTransitionAsync(ct);
    }
}
