using AndreyRudenko.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;

namespace AndreyRudenko.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public void SendEmail([FromBody] ClientForm client)
        {
            MailMessage message = new MailMessage();
            message.From = new MailAddress("andrey.email.bot@gmail.com", "AndreyBot");
            message.To.Add("itsmoyapochta@gmail.com");
            message.Subject = "Опять работа?";
            message.IsBodyHtml = true;
            message.Body = $"<div style=\"background-color: black; color: white; font-family: Comic Sans MS; padding: 20px; line-height: 30px;\">" +
                $"{client.Name}<br>{client.ContactDetails}<br>{client.BaseOption} | {client.OtherOption}</div>";

            using (SmtpClient smtp = new SmtpClient("smtp.gmail.com"))
            {
                smtp.Credentials = new NetworkCredential("andrey.email.bot@gmail.com", "togpuhlmnhseojhs");
                smtp.Port = 587;
                smtp.EnableSsl = true;

                smtp.Send(message);
            }
        }
    }
}
