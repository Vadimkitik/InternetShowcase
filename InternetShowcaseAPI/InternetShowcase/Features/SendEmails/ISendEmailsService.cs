using InternetShowcase.Features.SendEmails.Models;
using InternetShowcase.Infrastructure.Services;
using System.Threading.Tasks;

namespace InternetShowcase.Features.SendEmails
{
    public interface ISendEmailsService
    {
        Task<Result> SendYourselfEmail(FeedbackFormRequestModel model);
    }
}
