using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace taskmanager.Models
{
    public class User 
    {
        public int UserId { get; set; } 

        [Required]
        public string Username { get; set; }

        [Required]
        [MaxLength(50)]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }
}
