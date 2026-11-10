using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models; 

[Table("CountyEducation")]
public class CountyEducation
{
    [Key]
    public int countyEducationId { get; set; }

    // Foreign Key 
    public int? userId { get; set; } 

    // Connects Model to Model (mundu-kumundu🤣)
    [ForeignKey("userId")]
    public dotnet_backend.Models.User? User { get; set; } 

    // 3. The rest of your columns
    public string county { get; set; } = string.Empty;
    
    [MaxLength(10)]
    public string countyCode { get; set; } = string.Empty;
    
    public string? officeAddress { get; set; }
    
    public bool isActive { get; set; } = true;
    
    [AllowedValues("pending", "approved", "denied", "inactive", ErrorMessage = "Invalid status.")]
    public string status { get; set; } = "pending";

    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o"); 
    
    public string? updatedAt { get; set; }
    
    public string? deletedAt { get; set; }
}