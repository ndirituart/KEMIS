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

        [HttpPost("CreateNewSchool")]
        public async Task<IActionResult> CreateNewSchool([FromForm] BasicEducation obj)
        {
            // 1. Handle the File Upload
            string? uniqueFileName = null;
            
            // Notice we use obj.certificatePdf here
            if (obj.certificatePdf != null) 
            {
                if (obj.certificatePdf.ContentType != "application/pdf")
                    return BadRequest("Only PDF files are allowed.");

                if (obj.certificatePdf.Length > (8 * 1024 * 1024))
                    return BadRequest("File size cannot exceed 8MB.");

                var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");
                if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

                uniqueFileName = Guid.NewGuid().ToString() + "_" + obj.certificatePdf.FileName;
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await obj.certificatePdf.CopyToAsync(stream);
                }
            }

            // 2. Map the object to the database model
            var school = new BasicEducation
            {
                institutionName = obj.institutionName, // Notice obj. here
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
                createdAt = DateTime.UtcNow.ToString("o")
            };

            _context.BasicEducations.Add(school);
            await _context.SaveChangesAsync();

            return Ok(new { message = "School registered successfully!", id = school.institutionId });
        }
    }
}