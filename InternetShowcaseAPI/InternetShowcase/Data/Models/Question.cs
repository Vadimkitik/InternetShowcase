using InternetShowcase.Data.Models.Base;
using InternetShowcase.Features.SendEmails.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Data.Models
{
    public class Question : FeedbackFormRequestModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Subject { get; set; }

        public DateTime SentOn { get; set; }
    }
}
