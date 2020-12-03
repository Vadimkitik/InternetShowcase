using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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

        public Task<User> GetByEmail(string email)
            => _userManager.FindByEmailAsync(email);

        public async Task<IdentityResult> Create(CreateUserRequestModel model)
        {
            User user = new User 
            {
                Email = model.Email,
                UserName = model.UserName
            };
            IdentityResult result = await _userManager.CreateAsync(user, model.Password);
            return result;

        }
        public async Task<IdentityResult> Edit(UpdateUserRequestModel model)
        {
            User user = await _userManager.FindByIdAsync(model.Id);
            if (user != null)
            {
                user.Email = model.Email;
                user.UserName = model.Email;
                user.UserName = model.UserName;

                var result = await _userManager.UpdateAsync(user);
                return result;
            }
            var error = new IdentityError
            {
                Description = "Not Found User"
            };
            return IdentityResult.Failed(error);
        }

        public Task<bool> Delete(string id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IdentityResult> ChangePassword(
            ChangePasswordRequestModel model, 
            IPasswordValidator<User> _passwordValidator, 
            IPasswordHasher<User> _passwordHasher)
        {
            User user = await _userManager.FindByIdAsync(model.Id);
            if (user != null)
            {
                var result = await _passwordValidator
                                      .ValidateAsync(_userManager, user, model.NewPassword);                
                if (result.Succeeded)
                {
                    user.PasswordHash = _passwordHasher.HashPassword(user, model.NewPassword);
                    await _userManager.UpdateAsync(user);
                    
                }
                return result;                
            }
            var error = new IdentityError
            {
                Description = "Not Found User"
            };
            return IdentityResult.Failed(error); ;
        }        
    }
}
