using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("BasicEducation")]
public class BasicEducation
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int institutionId { get; set; }

    public string institutionName { get; set; } = string.Empty;
    public string institutionType { get; set; } = string.Empty;
    public string emailId { get; set; } = string.Empty;
    public string mobileNo { get; set; } = string.Empty;
    public string headOfInstitution { get; set; } = string.Empty;
    public string? postalAddressHoi { get; set; }
    public string county { get; set; } = string.Empty;
    public string subCounty { get; set; } = string.Empty;
    public string? constituency { get; set; }
    public string? postalAddressInstitution { get; set; }
    
    public string applicationType { get; set; } = string.Empty;
    public string institutionLevel { get; set; } = string.Empty;
    public bool certificateValid { get; set; } = true;
    public string? certificatePdfUrl { get; set; }
    public string? certificateNumber { get; set; }
    public int totalLearners { get; set; }

    public string? latitude { get; set; }
    public string? longitude { get; set; }

    public string? accomodationType { get; set; }
    public string? schoolCategory { get; set; }

    public bool isActive { get; set; } = true;
    public string status { get; set; } = "pending";
    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; }
    public string? deletedAt { get; set; }
}