using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace InternetShowcase.Data
{
    public class ShowcaseDbContext : DbContext
    {
        public ShowcaseDbContext(DbContextOptions<ShowcaseDbContext> options)
            : base (options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        
        public DbSet<Category> Categories { get; set; }
    }
}
