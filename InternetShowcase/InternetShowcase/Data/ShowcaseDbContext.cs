using InternetShowcase.Data.Models;
using InternetShowcase.Data.Models.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace InternetShowcase.Data
{
    public class ShowcaseDbContext : IdentityDbContext<User>
    {
        public ShowcaseDbContext(DbContextOptions<ShowcaseDbContext> options)
            : base (options)
        { }

        public DbSet<Product> Products { get; set; }
        
        public DbSet<Category> Categories { get; set; }

    }
}
