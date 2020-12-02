using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Users
{
    [Authorize]
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

        [HttpPost]
        public async Task<IActionResult> Create(UserCreateRequestModel model)
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

        [HttpPost]
        public async Task<IActionResult> Edit(UserEditServiceModel model)
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

        [HttpPost]
        public async Task<ActionResult> Delete(string id)
        {
            User user = await _userManager.FindByIdAsync(id);
            if (user != null)
            {
                var result = await _userManager.DeleteAsync(user);
                if (result.Succeeded)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return NotFound(id);
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
