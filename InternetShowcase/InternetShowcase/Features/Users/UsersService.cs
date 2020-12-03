using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Users
{
    public class UsersService : IUsersService
    {
        private readonly UserManager<User> _userManager;
        private readonly HttpContext httpContext;

        public UsersService(UserManager<User> userManager, HttpContext httpContext = null)
        {
            _userManager = userManager;
            this.httpContext = httpContext;
        }

        public IEnumerable<User> GetAll()
           => _userManager.Users.ToList();

        public Task<User> GetByEmail(string email)
            => _userManager.FindByEmailAsync(email);

        public async Task<IdentityResult> Create(UserCreateRequestModel model)
        {
            User user = new User 
            {
                Email = model.Email,
                UserName = model.UserName
            };
            IdentityResult result = await _userManager.CreateAsync(user, model.Password);
            return result;

        }
        public async Task<IdentityResult> Edit(UserEditModel model)
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

        public async Task<IdentityResult> ChangePassword(ChangePasswordRequestModel model)
        {
            User user = await _userManager.FindByIdAsync(model.Id);
            if (user != null)
            {
                var _passwordValidator = httpContext
                                           .RequestServices
                                           .GetService(typeof(IPasswordValidator<User>))
                                           as IPasswordValidator<User>;
                var _passwordHasher = httpContext
                                        .RequestServices
                                        .GetService(typeof(IPasswordHasher<User>))
                                        as IPasswordHasher<User>;

                var result = await _passwordValidator
                                                .ValidateAsync(_userManager, user, model.NewPassword);                
                if (result.Succeeded)
                {
                    user.PasswordHash = _passwordHasher.HashPassword(user, model.NewPassword);
                    await _userManager.UpdateAsync(user);
                    
                }
                return result;                
            }
            else
            {
                var error = new IdentityError
                {
                    Description = "Not Found User"
                };
                return IdentityResult.Failed(error); ;
            }
        }        
    }
}
