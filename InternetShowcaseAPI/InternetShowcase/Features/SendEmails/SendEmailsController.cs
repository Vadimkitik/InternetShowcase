using InternetShowcase.Features.SendEmails.Models;
using InternetShowcase.Infrastructure.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace InternetShowcase.Features.SendEmails
{
    public class SendEmailsController : ApiController
    {
        private readonly ISendEmailsService _sendEmailsService;
        private readonly IHttpContextAccessor _httpContextAccessor;


        public SendEmailsController(
            ISendEmailsService sendEmailsService, 
            IHttpContextAccessor httpContextAccessor)
        {
            _sendEmailsService = sendEmailsService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost]
        [Route(nameof(SendYourselfEmail))]
        public async Task<IActionResult> SendYourselfEmail(FeedbackFormRequestModel model)
        {
            if (ModelState.IsValid)
            {
                model.ImageUrl = _httpContextAccessor.AbsoluteUrl(model.ImageUrl);
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
