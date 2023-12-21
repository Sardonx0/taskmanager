using Microsoft.EntityFrameworkCore;

public class Startup
{
    // ... other code

    public void ConfigureServices(IServiceCollection services)
    {
        // ... other configurations

        services.AddDbContext<TaskDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

        // ... other configurations
    }

    // ... other code
}
