//handles the report object that is sent to the CDE from the SCDE
namespace dotnet_backend.Models;

public class Report
{
    public int reportId { get; set; }
    public int institutionId { get; set; }
    public string institutionName { get; set; } = string.Empty;
    public string summary { get; set; } = string.Empty;
    public string recommendation { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string createdAt { get; set; } = string.Empty;
}