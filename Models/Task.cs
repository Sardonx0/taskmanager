using System;
using System.ComponentModel.DataAnnotations;

namespace taskmanager.Models
{
    public class Task 
    {
        public int TaskId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [DataType(DataType.MultilineText)]
        public string Description { get; set; }

        [Required]
        public Priority Priority { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; }

        [Required]
        public Status Status { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }

    public enum Priority
    {
        High,
        Medium,
        Low
    }

    public enum Status
    {
        NotStarted,
        InProgress,
        Completed
    }
}
