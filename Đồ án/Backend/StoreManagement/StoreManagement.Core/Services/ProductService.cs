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
    public class ProductService : IProductService
    {
        IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public int InsertService(Product product)
        {
            var checkID = _productRepository.IsDuplicate(product.ProductID);

            if (checkID)
            {
                throw new ValidateException("Sản phẩm đã tồn tại!");
            }

            return _productRepository.Insert(product);
        }

        public int UpdateService(Product product)
        {
            return _productRepository.Update(product);
        }
    }
}
