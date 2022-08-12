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
        private readonly HousingDataContext _housingDataContext;
        private readonly IMapper _mapper;

        public CityRepository(HousingDataContext housingDataContext, IMapper mapper)
        {
            _housingDataContext = housingDataContext;
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

            var result = await _housingDataContext.Cities.ToListAsync();
            return _mapper.Map<IEnumerable<CityDTO>>(result);
        }
    }
}