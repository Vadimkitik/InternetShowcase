using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Users
{
    public class UsersService : IUsersService
    {
        private readonly UserManager<User> _userManager;

        public UsersService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public IEnumerable<User> GetAll()
           => _userManager.Users.ToList();

        public async Task<IdentityResult> Create(UserCreateRequestModel model)
        {
            User user = new User 
            {
                Email = model.Email,
                UserName = model.Name
            };
            IdentityResult result = await _userManager.CreateAsync(user, model.Password);
            return result;

        }
        public async Task<IdentityResult> Edit(UserEditServiceModel model)
        {
            User user = await _userManager.FindByIdAsync(model.Id);
            if (user != null)
            {
                user.Email = model.Email;
                user.UserName = model.Email;
                user.UserName = model.Name;

                return await _userManager.UpdateAsync(user);
            }
            return null;
        }

        public Task<bool> Delete(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> ChangePassword(ChangePasswordRequestModel id)
        {
            throw new System.NotImplementedException();
        }

        public Task<User> GetByEmail(string email)
        {
            throw new System.NotImplementedException();
        }
    }
}
