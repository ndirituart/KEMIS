using Microsoft.EntityFrameworkCore; //important import
using dotnet_backend.Models; //important import

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    //1. Object one users
    public DbSet<User> Users => Set<User>();
    //2. Object two Schools
    public DbSet<BasicEducation> BasicEducations => Set<BasicEducation>();
    //3. Object three County Education
    public DbSet<CountyEducation> CountyEducations { get; set; }
    public DbSet<ScdeReport> ScdeReports { get; set; }
    public DbSet<InstitutionAssignment> InstitutionAssignments { get; set; }
    public DbSet<InstitutionComment> InstitutionComments { get; set; }
    public DbSet<InstitutionDecision> InstitutionDecisions { get; set; }
  
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Table names in the database
        modelBuilder.Entity<User>().ToTable("Users");
        modelBuilder.Entity<BasicEducation>().ToTable("BasicEducation");
        


    }

}