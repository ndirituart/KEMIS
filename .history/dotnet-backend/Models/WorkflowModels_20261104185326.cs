namespace dotnet_backend.Models;

// --- s ---
public record PendingInstitution(int institutionId, string institutionName, string county, string subCounty, string status);
public record ApprovedInstitution(int institutionId, string institutionName, string county, string subCounty, string status, string updatedAt);
public record RejectedInstitution(int institutionId, string institutionName, string county, string rejectionReason);
public record InstitutionDetail(int institutionId, string institutionName, string county, string status, List<Comment> Comments, List<Decision> Decisions);

public record Somment(int commentId, string Comment, string createdAt);
public record Decision(int decisionId, bool isApproved, string remarks, string decisionType, string createdAt);
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