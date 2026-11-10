namespace dotnet_backend.Models;

//this just fetches CDE user data
public class CountyProfile
{
    public int userId { get; set; } //foreign key
    public string fullName { get; set; } = string.Empty;
    public string county { get; set; } = string.Empty;
    public string countyCode { get; set; } = string.Empty;
    public string officeAddress { get; set; } = string.Empty;
}