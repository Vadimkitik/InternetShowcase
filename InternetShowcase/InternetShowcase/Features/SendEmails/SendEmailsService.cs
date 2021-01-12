using InternetShowcase.Data;
using InternetShowcase.Features.SendEmails.Models;
using Microsoft.EntityFrameworkCore;
using InternetShowcase.Infrastructure.Services;
using System.Threading.Tasks;
using InternetShowcase.Data.Models;

namespace InternetShowcase.Features.SendEmails
{
    public class SendEmailsService : ISendEmailsService
    {
        private readonly IEmailService _emailService;
        private readonly ShowcaseDbContext _context;

        public SendEmailsService(
            IEmailService emailService,
            ShowcaseDbContext context)
        {
            _emailService = emailService;
            _context = context;
        }

        public async Task<Result> SendYourselfEmail(FeedbackFormRequestModel model)
        {
            var email = "alleutina.shop@gmail.com";
            var subject = $"Форма вопроса о товаре от {model.Name}";
            var message = $"<p>Имя клиента: {model.Name}</p>" +
                          $"<p>Его телефон: {model.Telephone}</p>" +
                          $"<p>Его Email: {model.Email}</p>" +
                          $"<p>Просит узнать актуальную цену: {model.CheckPrice}</p>" +
                          $"<p>Просит узнать наличие товара: {model.CheckAvailability}</p>" +
                          $"<p>Вопрос от клиента: {model.Message}</p>" +
                          $"<p>Название товара: {model.ProductName}</p>" +
                          $"<p>Цена товара на сайте: {model.ProductPrice} р.</p>" +
                          $"<img src=\"{model.ImageUrl}\"/>";

            var product = await _context.Products.FirstOrDefaultAsync(p => p.Name == model.ProductName);

            Question question = new Question
            {
                ClientName = model.Name,
                ClientEmail = model.Email,
                ClientTelephone = model.Telephone,
                ClientMessage = model.Message,
                ProductID = product.Id,
                Subject = subject
            }; 

            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            var result = await _emailService.SendEmailAsync(email, subject, message);
            if (result.Failure)
            {
                return result.Error;
            }
            return true;
        }
    }
}
