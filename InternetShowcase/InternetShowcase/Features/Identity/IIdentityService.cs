using InternetShowcase.Infrastructure.Services;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Identity
{
    public interface IIdentityService
    {
        string GenerateJwtToken(string userId, string userName, string secret);

        Task<Result> ResetPasswordAsync(string email, string newPassword, string code);

        Task<Result> ConfirmEmail(string userId, string code);

        Task<string> ConfirmRegisterEmail(string email, string callbackUrl);

        Task<string> ConfirmForgotPasswordEmail(string email, string callbackUrl);
    }
}
