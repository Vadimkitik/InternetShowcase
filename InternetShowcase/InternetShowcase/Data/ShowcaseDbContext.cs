using InternetShowcase.Data.Models;
using InternetShowcase.Data.Models.Base;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace InternetShowcase.Data
{
    public class ShowcaseDbContext : IdentityDbContext<User>
    {
        private readonly ICurrentUserService currentUser;

        public ShowcaseDbContext(
            DbContextOptions<ShowcaseDbContext> options,
            ICurrentUserService currentUser)
            : base(options)
            => this.currentUser = currentUser;

        public DbSet<Product> Products { get; set; }        
        public DbSet<Category> Categories { get; set; }
        public DbSet<Question> Questions { get; set; }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            this.ApplyAuditInformation();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            this.ApplyAuditInformation();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .Entity<Category>()
                .HasQueryFilter(c => !c.IsDeleted);
            builder
                .Entity<Product>()
                .HasQueryFilter(c => !c.IsDeleted);

            base.OnModelCreating(builder);
        }

        private void ApplyAuditInformation()
            => this.ChangeTracker
            .Entries()
            .ToList()
            .ForEach(entry =>
            {
                var userName = this.currentUser.GetUserName();

                if (entry.Entity is IDeletableEntity deletableEntity)
                {
                    if (entry.State == EntityState.Deleted)
                    {
                        deletableEntity.DeletedOn = DateTime.UtcNow;
                        deletableEntity.DeletedBy = userName;
                        deletableEntity.IsDeleted = true;

                        entry.State = EntityState.Modified;

                        return;
                    }
                }
                else if (entry.Entity is IEntity entity)
                {
                    if (entry.State == EntityState.Added)
                    {
                        entity.CreatedOn = DateTime.UtcNow;
                        entity.CreatedBy = userName;
                    }
                    else if (entry.State == EntityState.Modified)
                    {
                        entity.ModifiedOn = DateTime.UtcNow;
                        entity.ModifiedBy = userName;
                    }
                }
            });

    }
}
