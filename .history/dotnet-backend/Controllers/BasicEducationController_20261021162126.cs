using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class BasicEducationController : ControllerBase
{
    private readonly UserDbContext _context;
    private readonly IWebHostEnvironment _environment; // Needed for file paths

    public BasicEducationController(UserDbContext context, IWebHostEnvironment environment)
    {
        _context = context;
        _environment = environment;
    }

    [HttpPost("CreateNewSchool")]
    public async Task<IActionResult> CreateNewSchool([FromForm] SchoolRegistrationDto dto)
    {
        // 1. Handle the File Upload
        string? uniqueFileName = null;
        
        if (dto.certificatePdf != null)
        {
            // Validate File on the server side too!
            if (dto.certificatePdf.ContentType != "application/pdf")
                return BadRequest("Only PDF files are allowed.");

            if (dto.certificatePdf.Length > (8 * 1024 * 1024))
                return BadRequest("File size cannot exceed 8MB.");

            // Save to wwwroot/uploads
            var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");
            if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

            uniqueFileName = Guid.NewGuid().ToString() + "_" + dto.certificatePdf.FileName;
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.certificatePdf.CopyToAsync(stream);
            }
        }

        // 2. Map DTO to Entity
        var school = new BasicEducation
        {
            institutionName = dto.institutionName,
            institutionType = dto.institutionType,
            // ... map all other fields ...
            certificatePdfUrl = uniqueFileName != null ? $"/uploads/{uniqueFileName}" : null,
            status = "pending",
            createdAt = DateTime.UtcNow.ToString("o")
        };

        _context.BasicEducations.Add(school);
        await _context.SaveChangesAsync();

        return Ok(new { message = "School registered successfully!", id = school.institutionId });
    }
}