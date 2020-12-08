using System.Threading.Tasks;

namespace InternetShowcase.Infrastructure.Services
{
    public interface IEmailService
    {
        Task<Result> SendEmailAsync(string email, string subject, string message);
    }
}
