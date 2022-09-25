using AutoMapper;
using HousingAPI.DataContext;
using HousingAPI.DTOs;
using HousingAPI.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HousingAPI.Repository
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly HousingDataContext _context;
        private readonly IMapper _mapper;

        public PropertyRepository(HousingDataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<PropertyDto>> GetProperties(int sellRent)
        {
            var properties = await _context.Properties
                .Include(p => p.PropertyType)
                .Include(p => p.FurnishingType)
                .Include(p => p.City)
                .Where(x=>x.SellRent==sellRent).ToListAsync();
            return _mapper.Map<IEnumerable<PropertyDto>>(properties);
        }
        
        public async Task<IEnumerable<PropertyTypeDto>> GetPropertyTypes()
        {
            var properties = await _context.Properties.ToListAsync();
            return _mapper.Map<IEnumerable<PropertyTypeDto>>(properties);
        }

        public void AddProperty(PropertyDto propertyDto)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteProperty(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<PropertyDto> GetPropertyDetails(int id)
        {
            var properties = await _context.Properties
               .Include(p => p.PropertyType)
               .Include(p => p.FurnishingType)
               .Include(p => p.City)
               .Where(x => x.Id== id).FirstOrDefaultAsync();
            return _mapper.Map<PropertyDto>(properties);
        }
    }
}

/*insert into Properties values(2,'City House Demo',2,2,2,3500,1300,1100,'City street','Main center Road',6,3,
4,1,'East',0,1,400, GETDATE(),0,'Well maintain builder floor available for rent', GETDATE(),1, GETDATE(),1);*/