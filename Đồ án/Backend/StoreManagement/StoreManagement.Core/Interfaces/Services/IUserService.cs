using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Services
{
    public interface IUserService
    {
        int InsertService(User user);

        int UpdateService(User user);

        User Login(string email, string password);

    }
}
