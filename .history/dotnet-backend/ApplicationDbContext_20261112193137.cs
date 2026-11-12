using Microsoft.EntityFrameworkCore; //important import
using dotnet_backend.Models; //important import

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    //1. Object one users
    public DbSet<User> Users => Set<User>();
    //2. Object two Schools
    public DbSet<BasicEducation> BasicEducations => Set<BasicEducation>();
    //3. Object three CDE 
    public DbSet<CountyEducation> CountyEducations => Set<CountyEducation>();
    //4. Object four SCDE 
   public DbSet<SubCountyEducation> SubCountyEducations { get; set; }
    //5. Object five Institution Workflow
    public DbSet<InstitutionAssignment> InstitutionAssignments => Set<InstitutionAssignment>();
    //6. Object six Institution Comments
    public DbSet<InstitutionComment> InstitutionComments => Set<InstitutionComment>();
    //7. Object seven Institution Decisions
    public DbSet<InstitutionDecision> InstitutionDecisions => Set<InstitutionDecision>();
    //8. Object eight Reports by SCQASO, SCDE and CDE
    public DbSet<Report> Reports { get; set; }
    //Assinged Schools
    public DbSet<AssignedSchool>

  
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Table names in the database
        modelBuilder.Entity<User>().ToTable("Users");
        modelBuilder.Entity<BasicEducation>().ToTable("BasicEducation");
        


    }

}