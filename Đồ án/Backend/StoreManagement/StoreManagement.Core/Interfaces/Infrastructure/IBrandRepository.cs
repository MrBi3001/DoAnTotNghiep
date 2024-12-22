using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface IBrandRepository : IBaseRepository<Brand>
    {
        int Insert(Brand brand);
        int Update(Brand brand);
        bool IsDuplicate(int brandID);
    }
}
