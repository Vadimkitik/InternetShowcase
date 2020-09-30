using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;

namespace TestWebAPI.Data.Repository
{
    public class UserRepository : IRepository<User>
    {
        private readonly TestDbContext _context;

        public UserRepository(TestDbContext context)
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

        public async Task<bool> Update(int id, User user)
        {
            if (id != user.Id)
            {
                return false;
            }

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
