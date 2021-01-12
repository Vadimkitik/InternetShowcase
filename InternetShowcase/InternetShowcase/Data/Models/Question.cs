using InternetShowcase.Data.Models.Base;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InternetShowcase.Data.Models
{
    public class Question : DeletableEntity
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string ClientName { get; set; }
        [EmailAddress]
        public string ClientEmail { get; set; }
        [Required]
        public string ClientTelephone { get; set; }
        
        public string ClientMessage { get; set; }

        [Required]
        public int ProductID { get; set; }
        [ForeignKey("ProductID")]
        public Product Product { get; set; }
    }
}
