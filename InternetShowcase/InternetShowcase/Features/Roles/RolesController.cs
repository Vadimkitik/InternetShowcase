using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Roles.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Roles
{
    //[Authorize]
    public class RolesController : ApiController
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        public RolesController(
            RoleManager<IdentityRole> roleManager,
            UserManager<User> userManager,
            IMapper mapper)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<RolesListingModel>> GetRoles()
        {
            var roles = _roleManager.Roles.ToList();

            if (roles == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<IdentityRole>, List<RolesListingModel>>(roles);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole(RoleModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _roleManager.CreateAsync(new IdentityRole(model.Name));
                if (result.Succeeded)
                {
                    return Ok(model);
                }
                else
                {
                    BadRequest(result.Errors);
                }
            }
            return BadRequest(ModelState.ErrorCount);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            var role = await _roleManager.FindByIdAsync(id);
            if (role != null)
            {
                var result = await _roleManager.DeleteAsync(role);
                if (result.Succeeded)
                {
                    return Ok(id);
                }
                else
                {
                    BadRequest(result.Errors);
                }
            }
            return BadRequest();
        }

        public async Task<IActionResult> EditRole(string userId)
        {
            // получаем пользователя
            User user = await _userManager.FindByIdAsync(userId);
            if (user != null)
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
                return Ok(model);
            }
            return NotFound();
        }

        [HttpPut]
        public async Task<IActionResult> EditRole(string userId, List<string> roles)
        {
            // получаем пользователя
            User user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                // получем список ролей пользователя
                var userRoles = await _userManager.GetRolesAsync(user);
                // получаем все роли
                var allRoles = _roleManager.Roles.ToList();
                // получаем список ролей, которые были добавлены
                var addedRoles = roles.Except(userRoles);
                // получаем роли, которые были удалены
                var removedRoles = userRoles.Except(roles);

                await _userManager.AddToRolesAsync(user, addedRoles);

                await _userManager.RemoveFromRolesAsync(user, removedRoles);

                return Ok(user);
            }

            return NotFound();
        }
    }
}
