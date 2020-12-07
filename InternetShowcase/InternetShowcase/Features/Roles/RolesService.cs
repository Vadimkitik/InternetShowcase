using InternetShowcase.Data.Models;
using InternetShowcase.Features.Roles.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Roles
{
    public class RolesService : IRolesService
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<User> _userManager;

        public RolesService(
            RoleManager<IdentityRole> roleManager, 
            UserManager<User> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }

        public async Task<Result> CreateRole(RoleModel model)
        {
                var result = await _roleManager.CreateAsync(new IdentityRole(model.Name));
                if (result.Succeeded)
                {
                    return true;
                }
                else
                {
                    return "Bad Request";
                }
        }

        public async Task<Result> DeleteRole(string id)
        {
            var role = await _roleManager.FindByIdAsync(id);
            if (role != null)
            {
                var result = await _roleManager.DeleteAsync(role);
                if (result.Succeeded)
                {
                    return true;
                }
                else
                {
                    return "Bad Request";
                }
            }
            return "User Not Founded";
        }

        public async Task<Result> EditUserRoles(UpdateUserRolesRequestModel updateUser)
        {
            User user = await _userManager.FindByIdAsync(updateUser.UserId);
            if (user != null)
            {
                // получем список ролей пользователя
                var userRoles = await _userManager.GetRolesAsync(user);
                if (userRoles == null)
                {
                    return "Bad Request";
                }
                // получаем все роли
                var allRoles = _roleManager.Roles.ToList();
                foreach(var role in updateUser.Roles)
                {
                    var checkRole = await _roleManager.FindByNameAsync(role);
                    if ( checkRole == null)
                    {
                        return "The role being added does not exist";
                    }
                }
                // получаем список ролей, которые были добавлены
                var addedRoles = updateUser.Roles.Except(userRoles);
                if (userRoles == null)
                {
                    return "Bad Request";
                }
                // получаем роли, которые были удалены
                var removedRoles = userRoles.Except(updateUser.Roles);

                await _userManager.AddToRolesAsync(user, addedRoles);
                await _userManager.RemoveFromRolesAsync(user, removedRoles);

                return true;
            }
            return "User Not Founded";
        }

        public async Task<ChangeRoleRequestModel> GetUserWithRoles(User user)
{
            // получем список ролей пользователя
            var userRoles = await _userManager.GetRolesAsync(user);
            var allRoles = _roleManager.Roles.ToList();
            ChangeRoleRequestModel model = new ChangeRoleRequestModel
            {
                UserId = user.Id,
                UserEmail = user.Email,
                UserRoles = userRoles,
                AllRoles = allRoles
            };
            return model;
        }
    }
}
