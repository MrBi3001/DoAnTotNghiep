using StoreManagement.Core.Entities;
using StoreManagement.Core.Exceptions;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Services
{
    public class BrandService : IBrandService
    {
        IBrandRepository _brandRepository;

        public BrandService(IBrandRepository brandRepository)
        {
            _brandRepository = brandRepository;
        }

        public int InsertService(Brand brand)
        {
            var checkID = _brandRepository.IsDuplicate(brand.BrandID);

            if (checkID)
            {
                throw new ValidateException("Hãng đã tồn tại!");
            }

            return _brandRepository.Insert(brand);
        }

        public int UpdateService(Brand brand)
        {
            return _brandRepository.Update(brand);
        }
    }
}
