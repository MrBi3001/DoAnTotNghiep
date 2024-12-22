using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface IOrderDetailRepository : IBaseRepository<OrderDetail>
    {
        int Insert(OrderDetail orderDetail);

        int Update(OrderDetail orderDetail);
    }
}
