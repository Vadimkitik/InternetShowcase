using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using InternetShowcase.Data;

namespace InternetShowcase.Data.Repository
{
    public class UserRepository : IRepository<User>
    {
        private readonly ShowcaseDbContext _context;

        public UserRepository(ShowcaseDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            IEnumerable<User> users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<User> GetByType(string email)
        {
            return await _context.Users.SingleOrDefaultAsync(p => p.Email == email);

        }
        public async Task<User> Create(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> Update(User user)
        {

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                return false;
            }
        }

        public async Task<bool> Delete(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(p => p.Id == id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

    }
}
