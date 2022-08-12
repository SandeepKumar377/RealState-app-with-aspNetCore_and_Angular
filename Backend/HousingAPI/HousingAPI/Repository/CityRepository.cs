using HousingAPI.DataContext;
using HousingAPI.DTOs;
using HousingAPI.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HousingAPI.Repository
{
    public class CityRepository : ICityRepository
    {
        private readonly HousingDataContext _housingDataContext;

        public CityRepository(HousingDataContext housingDataContext)
        {
            _housingDataContext = housingDataContext;
        }
        public async Task<IEnumerable<CityDTO>> GetAllCity()
        {
            return await _housingDataContext.Cities.Select(city => new CityDTO()
            {
                Id = city.Id,
                Name = city.Name,
            }).ToListAsync();
        }
    }
}