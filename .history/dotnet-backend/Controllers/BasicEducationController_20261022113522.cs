using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class BasicEducationController : ControllerBase
{
    private readonly BasicEducationDbContext _context;
    private readonly IWebHostEnvironment _environment;

    public BasicEducationController(BasicEducationDbContext context, IWebHostEnvironment environment)
    {
        _context = context;
        _environment = environment;
    }

    [HttpPost("CreateNewSchool")]
    public async Task<IActionResult> CreateNewSchool([FromForm] BasicEducation obj )
    {
        string? uniqueFileName = null;

        if (this.certificatePdf != null)
        {
            if (this.certificatePdf.ContentType != "application/pdf")
                return BadRequest("Only PDF files are allowed.");

            if (this.certificatePdf.Length > (8 * 1024 * 1024))
                return BadRequest("File size cannot exceed 8MB.");

            var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");
            if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

            uniqueFileName = Guid.NewGuid().ToString() + "_" + this.certificatePdf.FileName;
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await this.certificatePdf.CopyToAsync(stream);
            }
        }

        var school = new BasicEducation
        {
            institutionName = this.institutionName,
            institutionType = this.institutionType,
            emailId = this.emailId,
            mobileNo = this.mobileNo,
            headOfInstitution = this.headOfInstitution,
            postalAddressHoi = this.postalAddressHoi,
            county = this.county,
            subCounty = this.subCounty,
            constituency = this.constituency,
            postalAddressInstitution = this.postalAddressInstitution,
            applicationType = this.applicationType,
            institutionLevel = this.institutionLevel,
            schoolCategory = this.schoolCategory,
            certificateValid = this.certificateValid,
            certificateNumber = this.certificateNumber,
            totalLearners = this.totalLearners,
            latitude = this.latitude,
            longitude = this.longitude,
            accomodationType = this.accomodationType,
            isActive = true,
            certificatePdfUrl = uniqueFileName != null ? $"/uploads/{uniqueFileName}" : null,
            status = "pending",
            createdAt = DateTime.UtcNow.ToString("o")
        };

        _context.BasicEducations.Add(school);
        await _context.SaveChangesAsync();

        return Ok(new { message = "School registered successfully!", id = school.institutionId });
    }
}
