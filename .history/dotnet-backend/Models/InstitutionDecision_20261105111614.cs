//Final decision which is "Approval" or "Rejection" of the institution by SCDE or SCQASO
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Models;

[Table("InstitutionDecisions")]
public class InstitutionDecision
{
    [Key]
    public int decisionId { get; set; }  
    public int institutionId { get; set; }  
    public int userId { get; set; } // The SCDE who made the initial decision  
    public bool isApproved { get; set; }  
    public string remarks { get; set; } = string.Empty;  
    public string? rejectionReason { get; set; }   
    public string decisionType { get; set; } = string.Empty; // "SCDE recommendation" or "CDE Final"  
    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");  
    public string? updatedAt { get; set; }   
    public int? updatedBy { get; set; } // The CDE who updated/overrode it
}