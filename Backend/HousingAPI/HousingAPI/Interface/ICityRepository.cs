using HousingAPI.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HousingAPI.Interface
{
    public interface ICityRepository
    {
        Task<IEnumerable<CityDTO>> GetAllCity();        
    }
}