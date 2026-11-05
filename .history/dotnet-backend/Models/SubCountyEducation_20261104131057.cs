using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("SubCountyEducation")]
public class SubCountyEducation
{
    [Key]
    public int reportId { get; set; }

    // The SCDE User who wrote the report
    public int scdeId { get; set; } 

    // The School being reported on
    public int institutionId { get; set; }

    [Required]
    public string summary { get; set; } = string.Empty;

    [Required]
    public string recommendation { get; set; } = string.Empty;

    // "pending", "reviewed_by_cde", "approved", "rejected"
    public string status { get; set; } = "pending"; 

    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; }
}