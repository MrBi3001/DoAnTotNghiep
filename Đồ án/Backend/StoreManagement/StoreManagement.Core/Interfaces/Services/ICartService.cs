using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Services
{
    public interface ICartService
    {
        int InsertService(Product cart);
        int UpdateService(Product cart);
    }
}
