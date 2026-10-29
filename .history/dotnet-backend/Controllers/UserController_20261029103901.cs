using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using dotnet_backend.Models;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
[EnableCors("allowCors")]
public class UserController : ControllerBase
{
    private readonly UserDbContext _context;
    private readonly TokenService _tokenService; 

    // Injected Dependency Injection constructor
    public UserController(UserDbContext context, TokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }

//to handle date ISO
    private static string NowIso()
    {
        return DateTime.UtcNow.ToString("o");
    }
    
    // 1. Create User Endpoint
    [HttpPost("CreateNewUser")]
    public IActionResult CreateUser([FromBody] User obj)
    {
        var userExistWithEmail = _context.Users.FirstOrDefault(u => u.emailId == obj.emailId);

        // If user does NOT exist, create the account
        if (userExistWithEmail == null)
        {
            _context.Users.Add(obj);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetUser), new { id = obj.userId }, obj);
        }
        else
        {
            return BadRequest("User with the same emailId already exists.");
        }
    }

    // 2. Login Endpoint
    [HttpPost("Login")]
public IActionResult Login([FromBody] UserLogin userLogin)
{
    // Note: Use ToLower() if you want case-insensitive email
    var user = _context.Users.FirstOrDefault(u => u.emailId == userLogin.emailId && u.password == userLogin.password);
    
    if (user == null)
    {
        return Unauthorized(new { message = "Invalid emailId or password" });
    }

    var token = _tokenService.CreateToken(user);

    return Ok(new { 
        token = token, 
        role = user.role, 
        userId = user.userId,
        fullName = user.fullName 
    });
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

    // 4(b). Get Users by Role Endpoint
    [HttpGet("role/{role}")]
    public IActionResult GetByRole(string role)
    {
        var users = _context.Users
            .Where(u => u.role == role && u.status == "active" && u.deletedAt == null)
            .ToList();

        return Ok(users);
    }

    // 5(a). Update User Endpoint
    [HttpPut("{id:int}")]
    public IActionResult UpdateUser(int id, [FromBody] User user)
    {
    var existingUser = _context.Users.FirstOrDefault(u => u.userId == id);
    if (existingUser == null) return NotFound();

    // Only update if the incoming value is provided
    if (!string.IsNullOrWhiteSpace(user.fullName)) 
        existingUser.fullName = user.fullName;
        
    if (!string.IsNullOrWhiteSpace(user.emailId)) 
        existingUser.emailId = user.emailId;

    if (!string.IsNullOrWhiteSpace(user.mobileNo)) 
        existingUser.mobileNo = user.mobileNo;

    if (!string.IsNullOrWhiteSpace(user.role)) 
        existingUser.role = user.role;

    if (!string.IsNullOrWhiteSpace(user.county)) 
        existingUser.county = user.county;

    if (!string.IsNullOrWhiteSpace(user.subCounty)) 
        existingUser.subCounty = user.subCounty;

    if (!string.IsNullOrWhiteSpace(user.constituency)) 
        existingUser.constituency = user.constituency;

    existingUser.updatedAt = DateTime.UtcNow.ToString("o");

    _context.SaveChanges();
    return Ok(existingUser);
    }

//    //5(b). Update user password 
    [HttpPut("{id:int}/password")]
    public async Task<IActionResult> ChangePassword(int id, [FromBody] ChangePassword payload)
    {
        var user = await _context.Users.FindAsync(id);
        if (user is null) return NotFound("User not found.");

        // ⚠️ TEMPORARY PLAIN TEXT CHECK (Since you aren't hashing yet)
        if (user.password != payload.currentPassword)
        {
            return Unauthorized(new { message = "Current password is incorrect." });
        }

        // Update to the new password
        user.password = payload.newPassword; 
        
        // Stamp the time
        user.updatedAt = DateTime.UtcNow.ToString("o");

        await _context.SaveChangesAsync();
        return NoContent(); // 204 Success
    }


    // 6(a). Soft delete User Endpoint
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user is null) return NotFound();
        if (user.deletedAt != null)
            return NoContent();              // already deleted, idempotent

        user.updatedAt = DateTime.UtcNow.ToString("o");
        user.deletedAt = DateTime.UtcNow.ToString("o");
        user.status    = "inactive";

        await _context.SaveChangesAsync();
        return NoContent();
    }

    // 6(b).Delete User Endpoint

   [HttpDelete("{id:int}/permanent")]
    public IActionResult DeleteUser(int id)
    {
        var user = _context.Users.FirstOrDefault(u => u.userId == id);
        if (user == null)
        {
            return NotFound();
        }

        _context.Users.Remove(user);
        _context.SaveChanges();
        return NoContent();
    }

    //7. Superadmin
    [HttpGet("SuperAdmin")]
    // [Authorize(Role = "Admin")] // Only users with 'Admin' role in their JWT can access this
    public IActionResult GetSecretData()
    {
        return Ok("You are an admin!");
    }
    
}