using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface IUserRepository : IBaseRepository<User>
    {
        int Insert(User user);

        int Update(User user);

        bool IsDuplicate(string email);

        bool IsDuplicate(string email, string password);
        
        User Login(string email, string password);

        string GetRoleName(int userID);

    }
}
