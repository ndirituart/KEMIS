namespace dotnet_backend.Models;

public class SubmitReportRequest
{
    public int institutionId { get; set; }
    public string summary { get; set; } = string.Empty;
    public string recommendation { get; set; } = string.Empty;
}