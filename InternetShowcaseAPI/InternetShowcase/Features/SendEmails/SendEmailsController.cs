using InternetShowcase.Features.SendEmails.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace InternetShowcase.Features.SendEmails
{
    public class SendEmailsController : ApiController
    {
        private readonly ISendEmailsService _sendEmailsService;

        public SendEmailsController(ISendEmailsService sendEmailsService)
        {
            _sendEmailsService = sendEmailsService;
        }

        [HttpPost]
        [Route(nameof(SendYourselfEmail))]
        public async Task<IActionResult> SendYourselfEmail(FeedbackFormRequestModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _sendEmailsService.SendYourselfEmail(model);
                if (result.Failure)
                {
                    return BadRequest(result.Error);
                }
                return Ok(result.Succeeded);
            }
            return BadRequest("Вы не заполнили обязательные поля");
        }
    }
}
