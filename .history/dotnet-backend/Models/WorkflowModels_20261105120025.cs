namespace dotnet_backend.Models;

public record PendingInstitutionDto(int institutionId, string institutionName, string county, string subCounty, string status);
public record ApprovedInstitutionDto(int institutionId, string institutionName, string county, string subCounty, string status, string updatedAt);
public record RejectedInstitutionDto(int institutionId, string institutionName, string county, string rejectionReason);
public record InstitutionDetailDto(int institutionId, string institutionName, string county, string status, List<CommentDto> Comments, List<DecisionDto> Decisions);
public record CommentDto(int commentId, string comment, string createdAt);
public record DecisionDto(int decisionId, bool isApproved, string remarks, string decisionType, string createdAt);
public record UserSummary(int userId, string fullName, string role);

public class AssignRequest { public int assigneeId { get; set; } }
public class CommentRequest { public string comment { get; set; } = string.Empty; }
public class DecisionRequest { public bool isApproved { get; set; } public string remarks { get; set; } = string.Empty; public string? rejectionReason { get; set; } }