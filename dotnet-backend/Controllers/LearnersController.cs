using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;

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

    // 1. CREATE LEARNER (Auto-fills School Data)
    [HttpPost("create")]
    public async Task<IActionResult> CreateLearner([FromBody] Learner learner)
    {
        if (learner == null) return BadRequest("Invalid data.");

        // 1. Fetch the school to get its details
        var school = await _context.BasicEducations.FindAsync(learner.institutionId);
        if (school == null) return NotFound("Institution not found.");

        // 2. Automatically classify the learner based on the school
        learner.institutionName = school.institutionName;
        learner.county = school.county;
        learner.subCounty = school.subCounty;
        learner.cluster = school.Cluster ?? "Unclassified";

        // 3. Generate the ULI
        learner.uli = await GenerateUniqueLearnerIdentifier(learner.isSne);
        
        // 4. Set defaults
        learner.createdAt = DateTime.UtcNow.ToString("o");
        learner.status = "active";

        _context.Learners.Add(learner);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Learner created and classified successfully!", learner });
    }

    // Helper Method to Generate ULI
    private async Task<string> GenerateUniqueLearnerIdentifier(bool isSne)
    {
        string typeCode = isSne ? "SPE" : "REG";
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var random = new Random();
        string randomChars = new string(Enumerable.Repeat(chars, 3)
            .Select(s => s[random.Next(s.Length)]).ToArray());

        // Get the max ID to ensure a unique sequence
        int maxId = await _context.Learners.AnyAsync() ? await _context.Learners.MaxAsync(l => l.learnerId) : 0;
        string sequence = (maxId + 1).ToString("D3");

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

    // 3. TRANSFER SCHOOL (Updates Classification)
    [HttpPut("transfer/{id:int}")]
    public async Task<IActionResult> TransferLearner(int id, [FromQuery] int newInstitutionId)
    {
        var learner = await _context.Learners.FindAsync(id);
        if (learner == null) return NotFound("Learner not found.");

        var newSchool = await _context.BasicEducations.FindAsync(newInstitutionId);
        if (newSchool == null) return NotFound("New institution not found.");

        // Update the school and re-classify the learner automatically!
        learner.institutionId = newSchool.institutionId;
        learner.institutionName = newSchool.institutionName;
        learner.county = newSchool.county;
        learner.subCounty = newSchool.subCounty;
        learner.cluster = newSchool.Cluster ?? "Unclassified";
        
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

    // 5. DASHBOARD QUERIES (Filtered by Role)
    
    // Get by School (HOI)
    [HttpGet("institution/{institutionId:int}")]
    public async Task<IActionResult> GetByInstitution(int institutionId)
    {
        var learners = await _context.Learners
            .Where(l => l.institutionId == institutionId && l.status == "active")
            .ToListAsync();
        return Ok(learners);
    }

    // Get by County (CDE)
    [HttpGet("county/{countyName}")]
    public async Task<IActionResult> GetByCounty(string countyName)
    {
        var learners = await _context.Learners
            .Where(l => l.county == countyName && l.status == "active")
            .ToListAsync();
        return Ok(learners);
    }

    // Get by SubCounty (SCDE)
    [HttpGet("subcounty/{subCountyName}")]
    public async Task<IActionResult> GetBySubCounty(string subCountyName)
    {
        var learners = await _context.Learners
            .Where(l => l.subCounty == subCountyName && l.status == "active")
            .ToListAsync();
        return Ok(learners);
    }

    // Get by Cluster
    [HttpGet("cluster/{clusterName}")]
    public async Task<IActionResult> GetByCluster(string clusterName)
    {
        var learners = await _context.Learners
            .Where(l => l.cluster == clusterName && l.status == "active")
            .ToListAsync();
        return Ok(learners);
    }
}