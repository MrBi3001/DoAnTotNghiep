using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface ICategoryRepository : IBaseRepository<Category>
    {
        int Insert(Category category);
        int Update(Category category);

        bool IsDuplicate(int categoryID);
    }
}
