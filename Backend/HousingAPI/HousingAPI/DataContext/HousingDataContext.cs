using HousingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HousingAPI.DataContext
{
    public class HousingDataContext : DbContext
    {
        public HousingDataContext(DbContextOptions<HousingDataContext> options) : base(options) { }
        public DbSet<City> Cities { get; set; }
    }
}
