public class Task 
{
    public int TaskId {get; set;}

    [Required]
    [MaxLenght(100)]
    public string Title {get; set; }

    [MaxLenght(500)]
    public string Description{get; set; }

    [Required]
    public Piority Piority{get; set;}


    [Required]
    [DataType(DataType.Date)]
    public DateTime DueDate{get;set; }

    [Required]
    public Status Status {get; set;}

    public int UserId { get; set; }
    public User User { get; set; }
}

public enum Piority{
    High,
    Medium,
    Low
}


public enum Status{
    NotStarted,
    Inprogress,
    Completed


}