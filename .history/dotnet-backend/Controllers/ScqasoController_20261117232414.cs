using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers;

[ApiController]
[Route("api/Learners")]
public class LearnersController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LearnersController(ApplicationDbContext context)
    {
        _context = context;
    }