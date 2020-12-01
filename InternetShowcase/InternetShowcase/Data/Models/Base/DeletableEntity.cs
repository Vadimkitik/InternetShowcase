using System;
using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Data.Models.Base
{
    public class DeletableEntity : Entity, IDeletableEntity
    {
        public DateTime DeletedOn { get; set; }

        [Required]
        public string DeletedBy { get; set; }

        public bool IsDeleted { get; set; }
    }
}
