using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Users
{
    //[Authorize]
    public class UsersController : ApiController
    {
        private readonly UserManager<User> _userManager;
        private readonly IUsersService _usersService;
        private readonly IMapper _mapper;

        public UsersController(
            UserManager<User> userManager,
            IUsersService usersService, IMapper mapper)
        {
            _userManager = userManager;
            _usersService = usersService;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<UsersListingModel>> GetAll()
        {
            var users = _usersService.GetAll();

            if (users == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<User>, List<UsersListingModel>>((List<User>)users);
        }

        [HttpGet("{Email}")]
        public async Task<ActionResult<User>> GetUser(string email)
        {
            var user = await _usersService.GetByEmail(email);
            if (user != null)
            {
                return user;
            }
            return NotFound($"NotFound User with Email: {email}");
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserRequestModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _usersService.Create(model);
                if (result.Succeeded)
                {
                    return Ok(model);
                }
                return BadRequest(result.Errors);                
            }
             return BadRequest();
        }

        [HttpPut]
        public async Task<IActionResult> EditUser(UpdateUserRequestModel model)
        {
            if (ModelState.IsValid)
            {

                var result = await _usersService.Edit(model);
                if (result.Succeeded)
                {
                    return Ok(result.Succeeded);
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(string id)
        {
            User user = await _userManager.FindByIdAsync(id);
            if (user != null)
            {
                var result = await _userManager.DeleteAsync(user);
                if (result.Succeeded)
                {
                    return Ok(result.Succeeded);
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return NotFound($"NotFound User with id: {id}");
        }

        [HttpPost("changePassword")]
        public async Task<IActionResult> ChangePassword(ChangePasswordRequestModel model)
        {
            if (ModelState.IsValid)
            {
                var passwordValidator = GetPasswordValidator();
                var passwordHasher = GetPasswordHash();
                var result = await _usersService.ChangePassword(model, passwordValidator, passwordHasher);
                if (result.Succeeded)
                {
                    return Ok(result.Succeeded);
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return BadRequest(model);
        }
    }
}
