using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

[Table("CountyEducation")]
public class CountyEducation
{
    [Key]
    public int countyEducationId { get; set; }

    public string county { get; set; } = string.Empty;
    public string countyCode{ get; set; } = string.Empty;
    public string subCounty { get; set; } = string.Empty;
    
    
    

    public bool isActive { get; set; } = true;
    [AllowedValues("pending", "approved", "denied", "inactive", ErrorMessage = "Invalid status.")]
    public string status { get; set; } = "pending"; //default is pending until approved
    public string createdAt { get; set; } = string.Empty; //Changed from DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; }
    public string? deletedAt { get; set; }
     public int? userId { get; set; } //linking each institution to a user later on
}
