//Final decision which is "Approval" or "Rejection" of the institution by SCDE or SCQASO
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("InstitutionDecisions")]
public class InstitutionDecision
{
    [Key]
    public int decisionId { get; set; }
    public int institutionId { get; set; }
    public int userId { get; set; } // The CDE/SCDE who made the decision
    public bool isApproved { get; set; }
    public string remarks { get; set; } = string.Empty;
     public string? RejectionReason { get; set; } 
    public string decisionType { get; set; } = string.Empty; // "SCDE recommendation" or "CDE Final"
    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");
}