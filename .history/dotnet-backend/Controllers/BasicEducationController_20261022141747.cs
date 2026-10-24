using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Models;
using System.IO;
using System;
using System.Threading.Tasks;

namespace dotnet_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasicEducationController : ControllerBase
    {
        //ApplicationDbContext universally calls all other DbContexts, we can't keep repeating this mistake omdsssss!
        private readonly ApplicationDbContext _context; 
        private readonly IWebHostEnvironment _environment;

        public BasicEducationController(ApplicationDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

//1. Register a School by HOIs

        [HttpPost("CreateNewSchool")]
        public async Task<IActionResult> CreateNewSchool([FromForm] BasicEducation obj)
        {
            //(a) Handling PDF file uploads
            string? uniqueFileName = null;
            
        
            if (obj.certificatePdf != null) 
            {
                if (obj.certificatePdf.ContentType != "application/pdf")
                    return BadRequest("Only PDF files are allowed.");

                if (obj.certificatePdf.Length > (8 * 1024 * 1024))
                    return BadRequest("File size cannot exceed 8MB.");

                // FALLBACK for File uploads (fix current 500 INTERNAL SERVER ERROR)
                // This uses WebRootPath if it exists, otherwise it defaults to the project's base directory
                    var rootPath = _environment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                    var uploadsFolder = Path.Combine(rootPath, "uploads");

                    if (!Directory.Exists(uploadsFolder)) 
                    {
                        Directory.CreateDirectory(uploadsFolder);
                    }
                if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

                uniqueFileName = Guid.NewGuid().ToString() + "_" + obj.certificatePdf.FileName;
                var filePath = Path.Combine(uploadsFolder, uniqueFileName); 

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await obj.certificatePdf.CopyToAsync(stream);
                }
            }

            // (b). Map the object "school" to the database model "BasicEducation"
            var school = new BasicEducation
            {
                //use obj. not this. this was bringing issues. Also dto. only when a DTO is used, which we are still learning atm
                institutionName = obj.institutionName, 
                institutionType = obj.institutionType,
                emailId = obj.emailId,
                mobileNo = obj.mobileNo,
                headOfInstitution = obj.headOfInstitution,
                postalAddressHoi = obj.postalAddressHoi,
                county = obj.county,
                subCounty = obj.subCounty,
                constituency = obj.constituency,
                postalAddressInstitution = obj.postalAddressInstitution,
                applicationType = obj.applicationType,
                institutionLevel = obj.institutionLevel,
                certificateValid = obj.certificateValid,
                certificateNumber = obj.certificateNumber,
                totalLearners = obj.totalLearners,
                latitude = obj.latitude,
                longitude = obj.longitude,
                accomodationType = obj.accomodationType,
                schoolCategory = obj.schoolCategory,
                isActive = obj.isActive,
                
                // Save the file name to the database
                certificatePdfUrl = uniqueFileName != null ? $"/uploads/{uniqueFileName}" : null,
                status = "pending",
                createdAt = DateTime.UtcNow.ToString("o") //handle this in Controller not Model (error CS0019)
            };

            _context.BasicEducations.Add(school);
            await _context.SaveChangesAsync();

            return Ok(new { message = "School registered successfully!", id = school.institutionId });
        }

// 3. Get All Users Endpoint
    [HttpGet("GetUsers")]
    public IActionResult GetUsers()
    {
        var list = _context.Users.ToList();
        return Ok(list);
    }

    // 4 (a). Get User by ID Endpoint
    [HttpGet("{id:int}")]
    public IActionResult GetUser(int id)
    {
        var user = _context.Users.FirstOrDefault(u => u.userId == id);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    }
}