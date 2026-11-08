namespace dotnet_backend.Models;

// --- DTOs ---
public record PendingInstitutionDto(int institutionId, string institutionName, string county, string subCounty, string status);
public record ApprovedInstitutionDto(int institutionId, string institutionName, string county, string subCounty, string status, string updatedAt);
public record RejectedInstitutionDto(int institutionId, string institutionName, string county, string rejectionReason);
public record InstitutionDetail(int institutionId, string institutionName, string county, string status, List<CommentDto> Comments, List<DecisionDto> Decisions);

public record CommentDto(int commentId, string Comment, string createdAt);
public record DecisionDto(int decisionId, bool isApproved, string remarks, string decisionType, string createdAt);
public record UserSummary(int userId, string FullName, string Role);

// --- Requests ---
public class AssignRequest { public int assigneeId { get; set; } }
public class CommentRequest { public string Comment { get; set; } = string.Empty; }
public class DecisionRequest { public bool isApproved { get; set; } public string remarks { get; set; } = string.Empty; }

// --- Enums ---
public enum AssignmentRole { SCDE, CQASO }
public class DecisionRequest 
{ 
    public bool isApproved { get; set; } 
    public string remarks { get; set; } = string.Empty; 
    
    // Allow the frontend to send a specific rejection reason
    public string? RejectionReason { get; set; } 
}