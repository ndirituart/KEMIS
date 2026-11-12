using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models;

[Table("SubCountyEducation")]
public class SubCountyEducation
{
    [Key]
    public int scdeId { get; set; }
    
    public string subCounty { get; set; } = string.Empty;
    public string county { get; set; } = string.Empty;
    public string countyCode { get; set; } = string.Empty;
    public string? officeAddress { get; set; }
    
    public int? userId { get; set; } 
    
    public bool isActive { get; set; } = true;
    
    [AllowedValues("active", "inactive", "pending")]
    public string status { get; set; } = "active";

    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; }
    public string? deletedAt { get; set; }
}