using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Users
{
    public interface IUsersService
    {
        IEnumerable<User> GetAll();
        Task<User> GetByEmail(string email);
        Task<IdentityResult> Create(CreateUserRequestModel user);
        Task<IdentityResult> Edit(UpdateUserRequestModel model);
        Task<bool> Delete(string id); 
        Task<IdentityResult> ChangePassword(
            ChangePasswordRequestModel model,
            IPasswordValidator<User> _passwordValidator,
            IPasswordHasher<User> _passwordHasher);
    }
}
