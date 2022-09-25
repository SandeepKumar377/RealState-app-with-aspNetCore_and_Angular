using HousingAPI.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HousingAPI.Interface
{
    public interface IPropertyRepository
    {
        Task<IEnumerable<PropertyDto>> GetProperties(int sellRent);
        Task<IEnumerable<PropertyTypeDto>> GetPropertyTypes();
        Task<PropertyDto> GetPropertyDetails(int id);
        void AddProperty(PropertyDto propertyDto);
        void DeleteProperty(int id);

    }
}
