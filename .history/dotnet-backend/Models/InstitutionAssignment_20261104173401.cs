//assigning schools to SCDEs and SCQASO

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("InstitutionAssignments")]
public class InstitutionAssignment
{
    [Key]
    public int assignmentId { get; set; }
    public int institutionId { get; set; } // Links to BasicEducation
    public int assigneeId { get; set; } // Links to the SCDE User by 
    public string assigneedAt { get; set; } = DateTime.UtcNow.ToString("o");
}