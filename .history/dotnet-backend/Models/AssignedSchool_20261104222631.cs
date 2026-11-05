//handles each school assigned to an SCDE by a CDE
namespace dotnet_backend.Models;

public class AssignedSchool
{
    public int institutionId { get; set; }
    public string institutionName { get; set; } = string.Empty;
    public string County { get; set; } = string.Empty;
    public string SubCounty { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public bool hasReport { get; set; } 
}