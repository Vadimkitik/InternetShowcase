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
    }
}
