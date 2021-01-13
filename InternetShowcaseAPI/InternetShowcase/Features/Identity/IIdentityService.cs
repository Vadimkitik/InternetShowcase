using InternetShowcase.Infrastructure.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Identity
{
    public interface IIdentityService
    {
        string GenerateJwtToken(string userId, string userName, IList<string> userRoles, string secret);

        Task<Result> ResetPasswordAsync(string email, string newPassword, string code);

        Task<Result> ConfirmEmail(string userId, string code);

        Task<Result> ConfirmRegisterEmail(string email, string callbackUrl);

        Task<Result> ConfirmForgotPasswordEmail(string email, string callbackUrl);
    }
}
