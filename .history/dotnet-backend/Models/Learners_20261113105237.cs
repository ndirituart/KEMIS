using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models;

[Table("Learners")]
public class Learner
{
    [Key]
    public int learnerId { get; set; }

    public int institutionId { get; set; }
    public string institutionName { get; set; } = string.Empty;

    public string firstName { get; set; } = string.Empty;
    public string? middleName { get; set; }
    public string lastName { get; set; } = string.Empty;
    
    public string? countryOfResidence { get; set; }
    public string? county { get; set; }
    public string? subCounty { get; set; }
    public string? locationOfBirth { get; set; }
    public string? knecAssessmentNumber { get; set; }
    public string? learnerInterest { get; set; }
    public string? medicalCondition { get; set; }
    public string? religion { get; set; }
    public string? uli { get; set; }
    public string? educationLevel { get; set; }

    public string? gender { get; set; }
    public string? dateOfBirth { get; set; }
    public bool isOrphan { get; set; } = false;
    public bool isSne { get; set; } = false;
    public string? nationality { get; set; }
    public string? identificationDocumentType { get; set; }
    public string? birthCertificateNumber { get; set; }
    public string? grade { get; set; }
    public string? boardingStatus { get; set; }

    public string? assistiveDeviceRequired { get; set; }
    public string? assistiveDeviceName { get; set; }
    public string? assistiveDeviceType { get; set; }

    public string? parentFirstName { get; set; }
    public string? parentMiddleName { get; set; }
    public string? parentLastName { get; set; }
    public string? parentRelationship { get; set; }
    public string? parentIdType { get; set; }
    public string? parentNationalId { get; set; }
    public string? parentCountry { get; set; }
    public string? parentMobileNo { get; set; }
    public string? parentEmailId { get; set; }

    [AllowedValues("active", "inactive", "transferred")]
    public string status { get; set; } = "active";
    
    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; }
    public string? deletedAt { get; set; }
}