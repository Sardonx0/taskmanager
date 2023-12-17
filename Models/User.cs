public class User 
{
    public int UserId { get; set; } 

    [Reguired]
    [MaxLenght(50)]
    public int Username {get; set;}

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set;}

    public ICollection<Task> Task {get; set;}

}