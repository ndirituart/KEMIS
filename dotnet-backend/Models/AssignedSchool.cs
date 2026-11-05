//handles each school assigned to an SCDE by a CDE
//I feel like this table is redundant because of InstitutionAssignment table and model but let me just keep it as I figure out backend
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models;

[Table("AssignedSchools")]
public class AssignedSchool
{
    [Key]
    public int assignmentId { get; set; } 
    public int institutionId { get; set; } // Foreign Key to BasicEducation
    public int assigneeId { get; set; } // Foreign Key to Users (The SCDE) 
    public int assignerId { get; set; } // Foreign Key to Users (The CDE)
    public string institutionName { get; set; } = string.Empty;
    public string county { get; set; } = string.Empty;
    public string subCounty { get; set; } = string.Empty;
    public string status { get; set; } = "pending"; // "pending" | "approved" | "rejected"
    public bool hasReport { get; set; } 
    public string createdDate { get; set; } = DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; }              
    public string? deletedAt { get; set; }              
}