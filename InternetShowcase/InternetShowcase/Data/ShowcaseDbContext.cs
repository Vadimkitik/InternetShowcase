using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace InternetShowcase.Data
{
    public class ShowcaseDbContext : DbContext
    {
        public ShowcaseDbContext(DbContextOptions<ShowcaseDbContext> options)
            : base (options)
        {
            // Database.EnsureDeleted();
            // Database.EnsureCreated();
        }
        public DbSet<Product> Products { get; set; }
    }
}
