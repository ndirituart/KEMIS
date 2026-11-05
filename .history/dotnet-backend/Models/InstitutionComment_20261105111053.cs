//Comments made by SCDE and SCQASO on the schools they are assigned to
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models;

[Table("InstitutionComments")]
public class InstitutionComment
{
    [Key]
    public int commentId { get; set; }   
    public int institutionId { get; set; }    
    public int userId { get; set; } // Who originally wrote it  eg SCQASO or SCDE
    public string commentText { get; set; } = string.Empty;   
    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");   
    public string? updatedAt { get; set; } 
    public int? updatedBy { get; set; } //Who updated the comment 
}