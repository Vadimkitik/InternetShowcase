using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestWebAPI.Data.Models;

namespace TestWebAPI.Data
{
    public class TestDbContext : DbContext
    {

        public TestDbContext(DbContextOptions<TestDbContext> options)
             : base(options)
        {
            
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<UnderSubCategory> UnderSubCategories { get; set; }
    }
}
