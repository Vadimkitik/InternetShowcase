using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace InternetShowcase.Data
{
    public class ShowcaseDbContext : IdentityDbContext
    {
        public ShowcaseDbContext(DbContextOptions<ShowcaseDbContext> options)
            : base (options)
        {

        }
    }
}
