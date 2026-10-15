using Microsoft.EntityFrameworkCore; //important import
using dotnet_backend.Models; //important import

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    //1. Object one users
    public DbSet<User> Users => Set<User>();
  
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Table names in the database
        modelBuilder.Entity<Employee>().ToTable("Employees")    modelBuilder.Entity<User>().ToTable("Users");


    }

    public override int SaveChanges()
    {
        StampAuditFields();
        return base.SaveChanges();
    }

    public override Task<int> SaveChangesAsync(CancellationToken ct = default)
    {
        StampAuditFields();
        return base.SaveChangesAsync(ct);
    }

    private void StampAuditFields()
    {
        var now = DateTime.UtcNow;

        foreach (var entry in ChangeTracker.Entries<Employee>())
        {
            if (entry.State == EntityState.Added)
            {
                entry.Entity.createdDate = now;
            }
            else if (entry.State == EntityState.Modified)
            {
                entry.Entity.updatedDate = now;
            }
        }
    }
}