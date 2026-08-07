using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

Console.WriteLine("Hello, World!");

//installing CORS to fix Angular and .NET running on different ports
var builder = WebApplication.CreateBuilder(args);

// 1. Define CORS Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddControllers();

var app = builder.Build();

// 2. Enable CORS Middleware
app.UseCors("AllowAngularDev");

app.UseAuthorization();
app.MapControllers();

app.Run();