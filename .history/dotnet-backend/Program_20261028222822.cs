using Microsoft.EntityFrameworkCore;
using dotnet_backend.Models;
//JWT Token Authentication
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add Controllers
builder.Services.AddControllers();

// Configure PostgreSQL DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<UserDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Hashing for now because of persistent error"The type or namespace name 'BasicEducationDbContext' could not be found (are you missing a using directive or an assembly reference?)"
// builder.Services.AddDbContext<BasicEducationDbContext>(options =>
//  options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));


// Configure CORS for Angular frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("allowCors", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

// 1. Registering your Token Service
builder.Services.AddScoped<TokenService>(); //if using an interface use builder.Services.AddScoped<ITokenService, TokenService>();

// 2. Configuring the JWT Authentication from frontend to backend
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)),
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidateLifetime = true
        };
    });


var app = builder.Build();

app.UseRouting();
app.UseCors("allowCors");
app.UseCors("dev");
app.UseAuthorization();
//see API errors
app.UseDeveloperExceptionPage();
app.MapControllers();
//handle file uploads
app.UseStaticFiles(); 
//JWT authentication
app.UseAuthentication(); 
app.UseAuthorization();  


app.Run();