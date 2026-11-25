using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // I keep forgetting this
using dotnet_backend.Services;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers;

[ApiController]
[Authorize(Roles = "Sub-County Quality Assurance and Standards Officer (SCQASO)")]
[Route("api/sub-county-quality-assurance")]
public class ScqasoController : ControllerBase
{
    private readonly InstitutionWorkflowService _workflow;
    private readonly ApplicationDbContext _context; 

    public ScqasoController(InstitutionWorkflowService workflow, ApplicationDbContext context) 
    {
        _workflow = workflow;
        _context = context;
    }

    private int userId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
    
    // 1. Get Profile
    [HttpGet("profile")]
    public Task<IActionResult> GetScqasoProfile(CancellationToken ct) =>
        WithProfileAsync(profile => Task.FromResult<object>(new { profile.county, profile.subCounty }), ct);

    // 2. Get Dashboard Stats
    [HttpGet("dashboard-stats")]
    public Task<IActionResult> GetScqasoStats(CancellationToken ct) =>
        WithProfileAsync(profile => _workflow.GetScqasoDashboardStatsAsync(profile, ct), ct);

    // 3. Get Inspected Schools
    [HttpGet("inspected-schools")]
    public Task<IActionResult> GetInspectedSchools(CancellationToken ct) =>
        WithProfileAsync(profile => _workflow.GetScqasoSchoolsAsync(profile, approved: true, ct), ct);

    // 4. Get Pending Inspections
    [HttpGet("pending-inspections")]
    public Task<object> GetPendingInspections(CancellationToken ct) =>
        _workflow.GetPendingInspectionsAsync(userId, ct);

    // 5. Submit Recommendation
    [HttpPost("submit-inspection")]
    public async Task<IActionResult> SubmitInspection(
        [FromForm] int institutionId, 
        [FromForm] string comment, 
        [FromForm] string inspectionDate,
        IFormFile? file, // The file is optional
        CancellationToken ct)
    {
        // 1. Handle the File Upload
        string? uniqueFileName = null;
        if (file != null && file.Length > 0)
        {
            // Ensure wwwroot/uploads exists
            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

            // Create a unique name to prevent overwriting
            uniqueFileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
        }

        // 2. Save the Comment and File Data to Database
        var newComment = new InstitutionComment
        {
            institutionId = institutionId,
            userId = userId, // From JWT
            commentText = comment,
            reportFileName = uniqueFileName, // Save the unique filename
            inspectionDate = inspectionDate,
            createdAt = DateTime.UtcNow.ToString("o")
        };

        _context.InstitutionComments.Add(newComment);
        await _context.SaveChangesAsync(ct);

        return Ok(new { message = "Inspection report and recommendation submitted successfully." });
    }

    private async Task<IActionResult> WithProfileAsync(
        Func<dotnet_backend.Models.User, Task<object>> action, CancellationToken ct)
    {
        if (!int.TryParse(User.FindFirstValue(ClaimTypes.NameIdentifier), out var userId))
            return Unauthorized();

        var profile = await _workflow.GetScqasoProfileAsync(userId, ct);
        if (profile == null)
            return NotFound(new { message = "No active SCQASO profile with a county and sub-county was found." });

        return Ok(await action(profile));
    }
}