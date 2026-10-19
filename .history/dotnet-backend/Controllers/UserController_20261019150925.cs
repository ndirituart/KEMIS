using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
[EnableCors("allowCors")]
public class UserController : ControllerBase
{
    private readonly UserDbContext _context;

    // Injected Dependency Injection constructor
    public UserController(UserDbContext context)
    {
        _context = context;
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
        var user = _context.Users.FirstOrDefault(u => u.emailId == userLogin.emailId && u.password == userLogin.password);
        
        if (user == null)
        {
            return Unauthorized("Invalid emailId or password");
        }

        return Ok(user);
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
        return Ok(_context.Users
            .Where(u => u.role == role && u.status == "active" && u.deletedAt == null)
            .Select(u => new User (u))
            .ToList());
    }

    // 5(a). Update User Endpoint
    [HttpPut("{id:int}")]
    public IActionResult UpdateUser(int id, [FromBody] User user)
    {
        var existingUser = _context.Users.FirstOrDefault(u => u.userId == id);
        if (existingUser == null)
        {
            return NotFound();
        }

        //everything but UNCHANGEABLE userId and nationalID
        existingUser.fullName = user.fullName;
        existingUser.emailId = user.emailId;
        existingUser.mobileNo = user.mobileNo;
        existingUser.role = user.role;
        existingUser.county = user.county;
        existingUser.subCounty = user.subCounty;
        existingUser.constituency = user.constituency;
        existingUser.updatedAt    = DateTime.UtcNow.ToString("o");      // ⬅️ stamp it

        _context.SaveChanges();
        return Ok(existingUser);
    }

//    //5(b). Update user password 
//TODO: Learn how to learn Passwords
//    // PUT: api/users/5/password
//     [HttpPut("{id:int}/password")]
//     public async Task<IActionResult> ChangePassword(int id, [FromBody] ChangePasswordDto dto)
//     {
//         var user = await _context.Users.FindAsync(id);
//         if (user is null) return NotFound();
//         if (!_hasher.Verify(dto.currentPassword, user.password))
//             return Unauthorized(new { message = "Current password is incorrect." });

//         user.password  = _hasher.Hash(dto.newPassword);
//         user.updatedAt = DateTime.UtcNow.ToString("o");
//         await _context.SaveChangesAsync();
//         return NoContent();
//     }


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
    
}