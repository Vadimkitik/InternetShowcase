using System.Threading.Tasks;

namespace InternetShowcase.Infrastructure.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
