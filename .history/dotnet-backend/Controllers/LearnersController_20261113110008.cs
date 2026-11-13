using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;
using System.Text;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/learners")]
public class LearnersController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LearnersController(ApplicationDbContext context)
    {
        _context = context;
    }

    // 1. CREATE LEARNER (With ULI Generation)
    [HttpPost("create")]
    public async Task<IActionResult> CreateLearner([FromBody] Learner learner)
    {
        if (learner == null) return BadRequest("Invalid data.");

        // 1. Automatically link to the institution
        var school = await _context.BasicEducations.FindAsync(learner.institutionId);
        if (school == null) return NotFound("Institution not found.");
        
        learner.institutionName = school.institutionName;
        learner.createdAt = DateTime.UtcNow.ToString("o");
        learner.status = "active";

        // 2. Generate the ULI
        learner.uli = await GenerateUniqueLearnerIdentifier(learner.isSne);

        // 3. Save
        _context.Learners.Add(learner);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Learner created successfully!", learner });
    }

    // Helper Method to Generate ULI
    private async Task<string> GenerateUniqueLearnerIdentifier(bool isSne)
    {
        // A. Determine Type (REG or SPE)
        string typeCode = isSne ? "SPE" : "REG";

        // B. Generate 3 Random Alphanumeric Characters
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var random = new Random();
        string randomChars = new string(Enumerable.Repeat(chars, 3)
            .Select(s => s[random.Next(s.Length)]).ToArray());

        // C. Get the next sequence number
        // We count existing learners to get the next number (e.g., 001, 002)
        int currentCount = await _context.Learners.CountAsync();
        string sequence = (currentCount + 1).ToString("D3"); // Formats as 001, 002, etc.

        // D. Combine them: KEN-REG-XYZ-001
        return $"KEN-{typeCode}-{randomChars}-{sequence}";
    }

    // 2. UPDATE DETAILS
    [HttpPut("update/{id:int}")]
    public async Task<IActionResult> UpdateLearner(int id, [FromBody] Learner updateData)
    {
        var learner = await _context.Learners.FindAsync(id);
        if (learner == null) return NotFound("Learner not found.");

        if (!string.IsNullOrWhiteSpace(updateData.firstName)) learner.firstName = updateData.firstName;
        if (!string.IsNullOrWhiteSpace(updateData.lastName)) learner.lastName = updateData.lastName;
        if (!string.IsNullOrWhiteSpace(updateData.grade)) learner.grade = updateData.grade;
        if (!string.IsNullOrWhiteSpace(updateData.parentMobileNo)) learner.parentMobileNo = updateData.parentMobileNo;
        if (updateData.isSne != learner.isSne) learner.isSne = updateData.isSne;

        learner.updatedAt = DateTime.UtcNow.ToString("o");
        await _context.SaveChangesAsync();

        return Ok(new { message = "Learner details updated.", learner });
    }

    // 3. TRANSFER SCHOOL
    [HttpPut("transfer/{id:int}")]
    public async Task<IActionResult> TransferLearner(int id, [FromQuery] int newInstitutionId)
    {
        var learner = await _context.Learners.FindAsync(id);
        if (learner == null) return NotFound("Learner not found.");

        var newSchool = await _context.BasicEducations.FindAsync(newInstitutionId);
        if (newSchool == null) return NotFound("New institution not found.");

        learner.institutionId = newSchool.institutionId;
        learner.institutionName = newSchool.institutionName;
        learner.status = "transferred"; 
        learner.updatedAt = DateTime.UtcNow.ToString("o");

        await _context.SaveChangesAsync();
        return Ok(new { message = $"Successfully transferred to {newSchool.institutionName}.", learner });
    }

    // 4. DEACTIVATE
    [HttpPut("deactivate/{id:int}")]
    public async Task<IActionResult> DeactivateLearner(int id)
    {
        var learner = await _context.Learners.FindAsync(id);
        if (learner == null) return NotFound("Learner not found.");

        learner.status = "inactive";
        learner.updatedAt = DateTime.UtcNow.ToString("o");

        await _context.SaveChangesAsync();
        return Ok(new { message = "Learner has been marked as inactive.", learner });
    }

    // 5. GET ALL LEARNERS FOR A SCHOOL
    [HttpGet("institution/{institutionId:int}")]
    public async Task<IActionResult> GetLearnersByInstitution(int institutionId)
    {
        var learners = await _context.Learners
            .Where(l => l.institutionId == institutionId && l.status == "active")
            .ToListAsync();

        return Ok(learners);
    }
}