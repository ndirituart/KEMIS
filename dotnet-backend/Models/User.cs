using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models;

[Table("Users")]
public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int userId { get; set; }
    public string emailId { get; set; } = string.Empty;
    public string fullName { get; set; } = string.Empty;
    public string mobileNo { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
    public string role { get; set; } = string.Empty;
    public string nationalId { get; set; } = string.Empty;
    public string county { get; set; } = string.Empty;
    public string subCounty { get; set; } = string.Empty;
    public string constituency { get; set; } = string.Empty;
    public string createdDate { get; set; } = DateTime.UtcNow.ToString("o");
    //new thoughts to handle status when updating and soft deleting
    public int? institutionId { get; set; } //later link a user to an institution
    public string? updatedAt { get; set; }              
    public string? deletedAt { get; set; }              
    public string status { get; set; } = "active";      // "active" | "inactive"
}

public class UpdateUser
{
    public string? fullName { get; set; }
    public string? emailId { get; set; }
    public string? mobileNo { get; set; }
    public string? role { get; set; }
    public string? county { get; set; }
    public string? subCounty { get; set; }
    public string? constituency { get; set; }
}

//future feature
public class ChangePassword
{
    public string currentPassword { get; set; } = string.Empty;
    public string newPassword { get; set; } = string.Empty;
}