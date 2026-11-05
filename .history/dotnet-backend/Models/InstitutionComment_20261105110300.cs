//Comments made by SCDE and SCQASO on the schools they are assigned to
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("InstitutionComments")]
public class InstitutionComment
{
    [Key]
    public int commentId { get; set; }
    public int institutionId { get; set; }
    public int userId { get; set; } // Who wrote it 
    public string commentText { get; set; } = string.Empty;
    public string createdAt { get; set; } = DateTime.UtcNow.ToString("o");
    public string? updatedAt { get; set; } //In case on top of SCQASO comment, the SCDE comments
}