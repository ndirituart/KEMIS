//handles each school assigned to an SCDE by a CDE
namespace dotnet_backend.Models;

public class AssignedSchool
{
    public int institutionId { get; set; }
    public int assigneeId { get; set; } //links to SCDE
    public string institutionName { get; set; } = string.Empty;
    public string county { get; set; } = string.Empty;
    public string subCounty { get; set; } = string.Empty;
    public string status { get; set; } = string.Empty;
    public bool hasReport { get; set; } 
}