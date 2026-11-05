//This is more of a DTO to handle fetched reports to display on CDE screen
namespace dotnet_backend.Models;

public class SubmitReportRequest
{
    public int institutionId { get; set; }
    public string summary { get; set; } = string.Empty;
    public string recommendation { get; set; } = string.Empty;
}