using Dapper;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using static Dapper.SqlMapper;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {

        public UserRepository(IConfiguration configuration) : base(configuration)
        {

        }

        public int Insert(User user)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlComand = "Proc_InsertUser";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@in_UserID", user.UserID);
                parameters.Add("@in_UserName", user.Name);
                parameters.Add("@in_Email", user.Email);
                parameters.Add("@in_Password", user.Password);
                parameters.Add("@in_Address", user.Address);
                parameters.Add("@in_PhoneNumber", user.PhoneNumber);
                parameters.Add("@in_UserStatus", user.UserStatus);
                parameters.Add("@in_RegistrationDate", DateTime.Now);

                var rowEffect = Connection.Execute(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);
                return rowEffect;
            }
        }

        public int Update(User user)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlComand = "Proc_UpdateUser";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@in_UserID", user.UserID);
                parameters.Add("@in_Name", user.Name);
                parameters.Add("@in_Email", user.Email);
                //parameters.Add("@in_Password", user.Password);
                parameters.Add("@in_Address", user.Address);
                parameters.Add("@in_PhoneNumber", user.PhoneNumber);
                parameters.Add("@in_UserStatus", user.UserStatus);

                var rowEffect = Connection.Execute(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);
                return rowEffect;
            }
        }


        public bool IsDuplicate(string email)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCommandCheck = $"SELECT Count(*) FROM User WHERE User.Email = @Email";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add($"Email", email);

                var userDuplicate = Connection.QueryFirstOrDefault<int>(sqlCommandCheck, param: parameters);

                if (userDuplicate != 0)
                {
                    return true;
                }

                return false;
            }
        }

        public bool IsDuplicate(string email, string password)
        {
            throw new NotImplementedException();
        }

        public User Login(string email, string password)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlComand = "Proc_Login";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@in_Email", email);
                parameters.Add("@in_Password", password);

                var rowEffect = Connection.Execute(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                var entity = Connection.QueryFirstOrDefault<User>(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return entity;
            }
        }

        public string GetRoleName(int userID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCommandCheck = $"SELECT RoleName FROM UserRole INNER JOIN Role ON UserRole.RoleID = Role.RoleID WHERE UserRole.UserID = @UserID";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add($"UserID", userID);

                var roleName = Connection.QueryFirstOrDefault<string>(sqlCommandCheck, param: parameters);

                return roleName;
            }
        }
    }
}
