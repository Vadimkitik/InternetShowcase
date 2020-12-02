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
        UserManager<User> _userManager;
        private readonly IUsersService _usersService;

        public UsersController(
            UserManager<User> userManager, 
            IUsersService usersService)
        {
            _userManager = userManager;
            _usersService = usersService;
        }

        [HttpGet]
        public  IEnumerable<User> GetAll() 
            => _usersService.GetAll();

        [HttpGet("{Email}")]
        public async Task<ActionResult<User>> GetUser(string email)
        {
            var user = await _usersService.GetByEmail(email);
            if (user != null)
            {
                return user;
            }
            return NotFound($"User with Email: {email}");
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(UserCreateRequestModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _usersService.Create(model);
                if (result.Succeeded)
                {
                    return Ok(model);
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return Ok(model);
        }

        [HttpPut]
        public async Task<IActionResult> EditUser(UserEditServiceModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await _userManager.FindByIdAsync(model.Id);
                if (user != null)
                {
                    user.Email = model.Email;
                    user.UserName = model.Email;
                    user.UserName = model.Name;

                    var result = await _userManager.UpdateAsync(user);
                    if (result.Succeeded)
                    {
                        return Ok(model);
                    }
                    else
                    {
                        return BadRequest(result.Errors);
                    }
                }
            }
            return BadRequest(ModelState.ErrorCount);
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
            return NotFound($"User with id: {id}");
        }

        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangePasswordRequestModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await _userManager.FindByIdAsync(model.Id);
                if (user != null)
                {
                    var _passwordValidator = HttpContext
                                               .RequestServices
                                               .GetService(typeof(IPasswordValidator<User>))
                                               as IPasswordValidator<User>;
                    var _passwordHasher = HttpContext
                                            .RequestServices
                                            .GetService(typeof(IPasswordHasher<User>))
                                            as IPasswordHasher<User>;

                    IdentityResult result = await _passwordValidator
                                                    .ValidateAsync(_userManager, user, model.NewPassword);
                    if (result.Succeeded)
                    {
                        user.PasswordHash = _passwordHasher.HashPassword(user, model.NewPassword);
                        await _userManager.UpdateAsync(user);
                        return Ok(model);
                    }
                    else
                    {
                        foreach (var error in result.Errors)
                        {
                            ModelState.AddModelError(string.Empty, error.Description);
                        }
                        return BadRequest(ModelState.ErrorCount);
                    }
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Пользователь не найден");
                    return BadRequest(ModelState.ErrorCount);
                }
            }
            return Ok(model);
        }
    }
}
