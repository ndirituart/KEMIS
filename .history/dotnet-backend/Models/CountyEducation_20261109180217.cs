using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models; 

[Table("CountyEducation")]
public class CountyEducation
{
    public int institutionId { get; set; }
    public string institutionName { get; set; } = string.Empty;
    public string subCounty { get; set; } = string.Empty;
    public string status { get; set; } = string.Empty;
    public int totalLearners { get; set; }
    public string createdAt { get; set; } = string.Empty;
    public string? certificateNumber { get; set; }
}