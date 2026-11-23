using Microsoft.EntityFrameworkCore; //important import
using dotnet_backend.Models; //important import

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    //1. System users
    public DbSet<User> Users => Set<User>();
    //2. Schools
    public DbSet<BasicEducation> BasicEducations => Set<BasicEducation>();
    //3. County Director of Education (CDE) 
    public DbSet<CountyEducation> CountyEducations => Set<CountyEducation>();
    //4.Sub County Director of Education (SCDE) 
   public DbSet<SubCountyEducation> SubCountyEducation { get; set; }
   //5. Object five Institution Workflow
    public DbSet<InstitutionAssignment> InstitutionAssignments => Set<InstitutionAssignment>();
   //5. Sub County Quality Assurance Officer (SCQASO)
   public DbSet<SubCountyQualityAssurance> SubCountyQualityAssurances { get; set; }
    
    //6. Object six Institution Comments
    public DbSet<InstitutionComment> InstitutionComments => Set<InstitutionComment>();
    //7. Object seven Institution Decisions
    public DbSet<InstitutionDecision> InstitutionDecisions => Set<InstitutionDecision>();
    //8. Object eight Reports by SCQASO, SCDE and CDE
    public DbSet<Report> Reports { get; set; }
    //9. Object nine Assinged Schools
    public DbSet<AssignedSchool> AssignedSchools {get; set;}
    //10. Object ten Learners
    public DbSet<Learner> Learners { get; set; }

  
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Table names in the database
        modelBuilder.Entity<User>().ToTable("Users");
        modelBuilder.Entity<BasicEducation>().ToTable("BasicEducation");
        


    }

}