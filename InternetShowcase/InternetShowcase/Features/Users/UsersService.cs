using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Users
{
    public class UsersService : IUsersService
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UsersService(
            UserManager<User> userManager, 
            RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public IEnumerable<User> GetAll()
           => _userManager.Users.ToList();

        public Task<User> GetByEmail(string email)
            => _userManager.FindByEmailAsync(email);

        public async Task<Result> Create(CreateUserRequestModel model)
        {
            User user = new User 
            {
                Email = model.Email,
                UserName = model.UserName
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                // получаем все роли
                var allRoles = _roleManager.Roles.ToList();
                foreach (var role in model.Roles)
                {
                    var checkRole = await _roleManager.FindByNameAsync(role);
                    if (checkRole == null)
                    {
                        return $"Роль {role} не найдена";
                    }
                }
                // получаем список ролей, которые были добавлены
                var addedRoles = model.Roles.Except(userRoles);
                // получаем роли, которые были удалены
                var removedRoles = userRoles.Except(model.Roles);

                await _userManager.AddToRolesAsync(user, addedRoles);
                await _userManager.RemoveFromRolesAsync(user, removedRoles);

                var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                var resultConfirmEmail = await _userManager.ConfirmEmailAsync(user, token);
                if (resultConfirmEmail.Succeeded)
                {
                    return true;
                }
            }
            return "Bad Request";

        }
        public async Task<Result> Edit(UpdateUserRequestModel model)
        {
            User user = await _userManager.FindByIdAsync(model.Id);
            if (user != null)
            {
                user.Email = model.Email;
                user.UserName = model.UserName;

                var result = await _userManager.UpdateAsync(user);
                if (result.Succeeded)
                {
                    return true;
                }
                return "Bad Request";
            }
            return "Not Found User";
        }

        public async Task<Result> ChangePassword(
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
                    return true;
                }
                return "Bad Request";                
            }
            return "Not Found User";
        }        
    }
}
