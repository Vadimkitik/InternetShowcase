using InternetShowcase.Features.SendEmails.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace InternetShowcase.Features.SendEmails
{
    public class SendEmailsController : ApiController
    {
        private readonly IEmailService _emailService;

        public SendEmailsController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(SendMailRequestModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _emailService.SendEmailAsync(model.Email, model.Subject, model.Message);
                if (result.Failure)
                {
                    return BadRequest(result.Error);
                }
                return Ok(result.Succeeded);
            }
            return BadRequest();
        }
    }
}
