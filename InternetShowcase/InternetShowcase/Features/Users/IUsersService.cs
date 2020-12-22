using InternetShowcase.Data.Models;
using InternetShowcase.Features.Users.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Users
{
    public interface IUsersService
    {
        IEnumerable<User> GetAll();
        Task<User> GetByEmail(string email);
        Task<Result> Create(CreateUserRequestModel user);
        Task<Result> Edit(UpdateUserRequestModel model);
        Task<Result> ChangePassword(
            ChangePasswordRequestModel model,
            IPasswordValidator<User> _passwordValidator,
            IPasswordHasher<User> _passwordHasher);
    }
}
