using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StoreManagement.Core.Exceptions;

namespace StoreManagement.Core.Services
{
    public class UserService : IUserService
    {
        IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public int InsertService(User user)
        {
            var checkID = _userRepository.IsDuplicate(user.Email);

            if (checkID)
            {
                throw new ValidateException("Người dùng đã tồn tại!");
            }

            return _userRepository.Insert(user);
        }

        public int UpdateService(User user)
        {
            return _userRepository.Update(user);
        }

        public User Login(string email, string password)
        {
            var user = _userRepository.Login(email, password);

            if (user == null)
            {
                throw new ValidateException("Tên tài khoản hoặc mật khẩu không chính xác!");
            }

            return user;
        }
    }
}
