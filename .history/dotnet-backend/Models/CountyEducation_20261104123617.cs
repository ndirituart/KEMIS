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

    // The userId of the CDE assigned to this county
    // This is the crucial link. Note: Your controller uses Guid, but your model has int.
    // If your User table uses int userId, keep int. If it uses Guid, change this to Guid.
    public int? userId { get; set; } 

    public bool isActive { get; set; } = true;

    [AllowedValues("pending", "approved", "denied", "inactive", ErrorMessage = "Invalid status.")]
    public string status { get; set; } = "pending";

    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o"); 
    public string? updatedAt { get; set; }
    public string? deletedAt { get; set; }
}