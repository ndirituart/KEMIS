//handles the report object that is sent to the CDE from the SCDE
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models;

[Table("Reports")]
public class Report
{
    [Key]
    public int reportId { get; set; }  
    public int institutionId { get; set; }
    public int scqasoId { get; set; }   // Who wrote this report? The SCQ
    public string institutionName { get; set; } = string.Empty;  
    public string summary { get; set; } = string.Empty;  
    public string recommendation { get; set; } = string.Empty;  
    public string status { get; set; } = "CQASO Recommended";  
    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");  
    public string? updatedAt { get; set; }
}