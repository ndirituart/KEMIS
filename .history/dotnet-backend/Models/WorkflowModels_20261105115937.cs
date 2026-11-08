namespace dotnet_backend.Models;

public record PendingInstitutionDto(int institutionId, string institutionName, string county, string subCounty, string status);
public record ApprovedInstitutionDto(int institutionId, string institutionName, string county, string subCounty, string status, string updatedAt);
public record RejectedInstitutionDto(int institutionId, string institutionName, string county, string rejectionReason);
public record InstitutionDetailDto(int institutionId, string institutionName, string county, string status, List<CommentDto> Comments, List<DecisionDto> Decisions);
public record CommentDto(int commentId, string comment, string CreatedAt);
public record DecisionDto(int DecisionId, bool IsApproved, string Remarks, string DecisionType, string CreatedAt);
public record UserSummary(int UserId, string FullName, string Role);

public class AssignRequest { public int assigneeId { get; set; } }
public class CommentRequest { public string comment { get; set; } = string.Empty; }
public class DecisionRequest { public bool isApproved { get; set; } public string remarks { get; set; } = string.Empty; public string? rejectionReason { get; set; } }