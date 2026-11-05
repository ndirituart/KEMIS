using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("CountyEducation")]
public class CountyEducation
{
    [Key]
    public int countyEducationId { get; set; }

    //Links a CDE to a county
    //So ideally 47 CDEs
    [Required]
    [MaxLength(100)]
    public string county { get; set; } = string.Empty;
    [MaxLength(10)]
    public string countyCode { get; set; } = string.Empty;
    public string? officeAddress { get; set; }
    public int? userId { get; set; } 
    public bool isActive { get; set; } = true;
    [AllowedValues("pending", "approved", "denied", "inactive", ErrorMessage = "Invalid status.")]
    public string status { get; set; } = "pending";

    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o"); 
    public string? updatedAt { get; set; }
    public string? deletedAt { get; set; }
}