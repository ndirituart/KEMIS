using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("InstitutionAssignments")]
public class InstitutionAssignment
{
    [Key]
    public int assignmentId { get; set; }
    public int institutionId { get; set; } 
    
    // The SCDE or SCQASO receiving the assignment
    public int assigneeId { get; set; } 
    
    // The CDE who made the assignment
    public int assignerId { get; set; } 

    // Tracking status
    public string status { get; set; } = "pending"; // pending, completed, etc.
    public bool hasReport { get; set; } = false;
    
    public string assignedAt { get; set; } = DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; }
}