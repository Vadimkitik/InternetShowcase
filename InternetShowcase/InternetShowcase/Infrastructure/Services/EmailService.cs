using MailKit.Net.Proxy;
using MailKit.Net.Smtp;
using MimeKit;
using System;
using System.Net;
using System.Threading.Tasks;

namespace InternetShowcase.Infrastructure.Services
{
    public class EmailService : IEmailService
    {
        public async Task<Result> SendEmailAsync(string email, string subject, string message)
        {
            try
            {
                MimeMessage emailMessage = new MimeMessage();
                message = designMail(message);
                emailMessage.From.Add(new MailboxAddress("Администрация сайта Alleutina Shop", "alleutina.shop@gmail.com"));
                emailMessage.To.Add(new MailboxAddress("", email));
                emailMessage.Subject = subject;
                emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
                {
                    Text = message
                };

                using (var client = new SmtpClient())
                {
                    await client.ConnectAsync("smtp.gmail.com", 587, false);
                    await client.AuthenticateAsync("alleutina.shop@gmail.com", "25057519alch");
                    await client.SendAsync(emailMessage);
                    
                    await client.DisconnectAsync(true);
                }
                return true;
            }
            catch (Exception e)
            {
                return e.GetBaseException().Message;
            }
            
        }

        private string designMail(string message)
        {
            //var mailContainerSyle = "font-family: 'Lora', serif;" +
            //                        "font-weight: 300;" +
            //                        "margin: 10px;" +
            //                        "text-align: center;" +
            //                        "box-shadow: 0px 5px 30px 0px rgba(31, 35, 37, 0.15); background-color: #fcecfa;padding - bottom: 10px;border: 1px solid #ddd;border - radius: 10px;";

            //var mailCardSyle = "display: flex;" +
            //                   "justify-content:center;" +
            //                   "flex-direction:column;" +
            //                   "margin: 5px";

            //var mailMainSyle = "margin: 10px; font-size: 14px;";

            message = $"<h2>Вас приветствует Alleutina Shop!</h2>" +
                      $"<p>{message}</p>";
            return message;
        }
    }
}
