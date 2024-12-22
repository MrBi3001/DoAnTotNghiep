using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Services
{
    public interface IOrderService
    {
        int InsertService(Order order);
        int UpdateService(Order order);

    }
}
