using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface IProductRepository : IBaseRepository<Product>
    {
        int Insert(Product product);

        int Update(Product product);

        IEnumerable<Product> GetByCategoryId(int categoryID);

        IEnumerable<Product> GetByBrandId(int brandID);

        bool IsDuplicate(int productID);

        IEnumerable<string> GetImage(int productID);
    }
}
