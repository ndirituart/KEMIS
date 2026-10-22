using Microsoft.AspNetCore.Mvc;`nusing System.IO;`nusing System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]`npublic class BasicEducationController : ControllerBase
{
    private readonly UserDbContext _context;
    private readonly IWebHostEnvironment _environment;

    public BasicEducationController(UserDbContext context, IWebHostEnvironment environment)
    {
        _context = context;
        _environment = environment;
    }

    [HttpPost("CreateNewSchool")]
    public async Task<IActionResult> CreateNewSchool([FromForm] SchoolRegistrationDto dto)
    {
        string? uniqueFileName = null;

        if (dto.certificatePdf != null)
        {
            if (dto.certificatePdf.ContentType != "application/pdf")
                return BadRequest("Only PDF files are allowed.");

            if (dto.certificatePdf.Length > (8 * 1024 * 1024))
                return BadRequest("File size cannot exceed 8MB.");

            var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");
            if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

            uniqueFileName = Guid.NewGuid().ToString() + "_" + dto.certificatePdf.FileName;
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.certificatePdf.CopyToAsync(stream);
            }
        }

        var school = new BasicEducation
        {
            institutionName = dto.institutionName,
            institutionType = dto.institutionType,
            emailId = dto.emailId,
            mobileNo = dto.mobileNo,
            headOfInstitution = dto.headOfInstitution,
            postalAddressHoi = dto.postalAddressHoi,
            county = dto.county,
            subCounty = dto.subCounty,
            constituency = dto.constituency,
            postalAddressInstitution = dto.postalAddressInstitution,
            applicationType = dto.applicationType,
            institutionLevel = dto.institutionLevel,
            schoolCategory = dto.schoolCategory,
            certificateValid = dto.certificateValid,
            certificateNumber = dto.certificateNumber,
            totalLearners = dto.totalLearners,
            latitude = dto.latitude,
            longitude = dto.longitude,
            accomodationType = dto.accomodationType,
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
