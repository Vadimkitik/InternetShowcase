using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Roles.Models;
using InternetShowcase.Infrastructure.Services;
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
        private readonly IRolesService _rolesService;
        private readonly IMapper _mapper;
        public RolesController(
            RoleManager<IdentityRole> roleManager,
            UserManager<User> userManager,
            IMapper mapper, 
            IRolesService rolesService)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _mapper = mapper;
            _rolesService = rolesService;
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
                var result = await _rolesService.CreateRole(model);
                if (result.Failure)
                {
                    return BadRequest(result.Error);
                }
                return Ok();
            }
            return BadRequest(ModelState.ErrorCount);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            var result = await _rolesService.DeleteRole(id);
            if (result.Failure)
            {
                return BadRequest(result.Error);
            }
            return Ok();
        }

        [HttpGet("usersList")]
        public ActionResult<IEnumerable<UsersListWithAccessModel>> UsersList()
        {
            var users = _userManager.Users.ToList();
            if (users == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<User>, List<UsersListWithAccessModel>>(users);
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<ChangeRoleRequestModel>> UserRoles(string userId)
        {
            // получаем пользователя
            User user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                ChangeRoleRequestModel model = await _rolesService.GetUserWithRoles(user);
                return Ok(model);
            }
            return NotFound();
        }

        [HttpPut]
        public async Task<IActionResult> EditUserRoles(UpdateUserRolesRequestModel updateUser)
        {
            Result result = await _rolesService.EditUserRoles(updateUser);
            if(result.Failure)
            {

                return BadRequest(result.Succeeded); 
            }
            return Ok();
        }
    }
}
