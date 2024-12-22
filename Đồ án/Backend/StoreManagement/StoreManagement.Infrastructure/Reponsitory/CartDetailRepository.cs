using Dapper;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class CartDetailRepository : ICartDetailRepository
    {
        protected readonly IConfiguration Configuration;

        protected MySqlConnection Connection;

        public CartDetailRepository(IConfiguration configuration) => Configuration = configuration;

        public IEnumerable<CartDetail> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<CartDetail> GetByCartId(int cartID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                DynamicParameters parameters = new DynamicParameters();

                parameters.Add($"in_CartID", cartID);

                var entities = Connection.Query<CartDetail>($"Proc_GetCartDetailByCartID", param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return entities;
            }
        }

        public CartDetail GetByID(int cartDetailID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                DynamicParameters parameters = new DynamicParameters();

                parameters.Add($"in_CartDetailID", cartDetailID);

                var entity = Connection.QueryFirstOrDefault<CartDetail>($"Proc_GetCartDetailByID", param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return entity;
            }
        }

        public int Insert(CartDetail cartDetail)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                DynamicParameters parameters = new DynamicParameters();

                var sqlCommand = "Proc_InsertCartDetail";

                parameters.Add($"in_CartID", cartDetail.CartID);
                parameters.Add($"in_ProductID", cartDetail.ProductID);
                parameters.Add($"in_Quantity", cartDetail.Quantity);
                parameters.Add($"in_CartDetailStatus", cartDetail.CartDetailStatus);

                var rowEffect = Connection.Execute(sqlCommand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return rowEffect;
            }
        }

        public int Update(CartDetail cartDetail)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                DynamicParameters parameters = new DynamicParameters();

                var sqlCommand = "Proc_UpdateCartDetail";

                parameters.Add($"in_CartDetailID", cartDetail.CartDetailID);
                parameters.Add($"in_ProductID", cartDetail.ProductID);
                parameters.Add($"in_Quantity", cartDetail.Quantity);
                parameters.Add($"in_CartDetailStatus", cartDetail.CartDetailStatus);

                var rowEffect = Connection.Execute(sqlCommand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return rowEffect;
            }
        }

        public bool IsDuplicate(int cartDetailID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCmdCheck = "SELECT CartDetailID FROM CartDetail WHERE CartDetailID = @CartDetailID";

                DynamicParameters parameters = new();
                parameters.Add("CartDetailID", cartDetailID);

                var objDuplicate = Connection.QueryFirstOrDefault<string>(sqlCmdCheck, param: parameters);

                if (objDuplicate == null)
                {
                    return false;
                }

                return true;
            }
        }
    }
}
