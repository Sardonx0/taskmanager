using Microsoft.EntityFrameworkCore;
using taskmanager.Models;
using TaskManagerTask = taskmanager.Models.Task;


namespace taskmanager.Data
{
    public class TaskDbContext : DbContext
{
    public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options){}
    public DbSet<User> Users { get; set; }
    public DbSet<TaskManagerTask> Tasks { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Additional configurations can be added here
    }   
}
}
