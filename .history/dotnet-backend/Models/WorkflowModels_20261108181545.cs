namespace dotnet_backend.Models;

public record ApprovedInstitution(int institutionId, string institutionName, string county, string subCounty, string status, string updatedAt);
public record RejectedInstitution(int institutionId, string institutionName, string county, string subCounty, string status, string rejectionReason);
public record InstitutionDetail(int institutionId, string institutionName, string county, string status, List<Comment> Comments, List<Decision> Decisions);
public record Comment(int commentId, string comment, string createdAt);
public record Decision(int decisionId, bool isApproved, string remarks, string decisionType, string createdAt);
public record UserSummary(int userId, string fullName, string role);

public class AssignRequest { public int assigneeId { get; set; } }
public class CommentRequest { public string comment { get; set; } = string.Empty; }
public class DecisionRequest{ public bool isApproved { get; set; } public string remarks { get; set; } = string.Empty; public string? rejectionReason { get; set; } }
public enum AssignmentRole { SCDE, SCQASO }