using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace InternetShowcase.Data
{
    public class ShowcaseDbContent : DbContext
    {
        public ShowcaseDbContent(DbContextOptions<ShowcaseDbContent> options)
            : base (options)
        {
            Database.EnsureCreated();
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
