
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("InstitutionAssignments")]
public class InstitutionAssignment
{
    [Key]
    public int assignmentId { get; set; }
    public int institutionId { get; set; } // Links to BasicEducation
    public int assigneeId { get; set; } // Links to the SCDE User
    public string assigneedAt { get; set; } = DateTime.UtcNow.ToString("o");
}