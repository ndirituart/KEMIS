using Microsoft.EntityFrameworkCore; //important import
using dotnet_backend.Models; //important import

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    //1. Object one users
    public DbSet<User> Users => Set<User>();
    //2. Object two Schools
    public DbSet<BasicEducation> BasicEducations => Set<BasicEducation>();
    //3. Object three CDE Reports
    public DbSet<CountyEducation> CountyEducations => Set<CountyEducation>();
    //4. Object four SCDE Reports
    public DbSet<SubCountyEducation> SubCountyEducations => Set<SubCountyEducation>();
    //5. Object five Institution Workflow
    public DbSet<InstitutionAssignment> InstitutionAssignments => Set<InstitutionAssignment>();
    public DbSet<InstitutionComment> InstitutionComments => Set<InstitutionComment>();
    public DbSet<InstitutionDecision> InstitutionDecisions => Set<InstitutionDecision>();
  
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Table names in the database
        modelBuilder.Entity<User>().ToTable("Users");
        modelBuilder.Entity<BasicEducation>().ToTable("BasicEducation");
        


    }

}