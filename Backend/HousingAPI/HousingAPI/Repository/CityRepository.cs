using AutoMapper;
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
        private readonly HousingDataContext _context;
        private readonly IMapper _mapper;

        public CityRepository(HousingDataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IEnumerable<CityDTO>> GetAllCity()
        {
           /* return await _housingDataContext.Cities.Select(city => new CityDTO()
            {
                Id = city.Id,
                Name = city.Name,
            }).ToListAsync();*/

            //Using AutoMapper

            var result = await _context.Cities.ToListAsync();
            return _mapper.Map<IEnumerable<CityDTO>>(result);
        }
    }
}