using Dapper;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core;
using StoreManagement.Core.DTOs;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using System.Data;
using static Dapper.SqlMapper;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class CartRepository : BaseRepository<Cart>, ICartRepository
    {
        

        public CartRepository(IConfiguration configuration) : base(configuration)
        {
        }

        public Cart GetCartByUserId(int userId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_UserID", userId);

                var cart = Connection.QueryFirstOrDefault<Cart>(
                    "Proc_GetCartByUserID",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);

                if (cart == null)
                {
                    parameters = new DynamicParameters();
                    parameters.Add("in_UserID", userId);

                    var newCartId = Connection.ExecuteScalar<int>(
                        "Proc_CreateNewCart",
                        param: parameters,
                        commandType: CommandType.StoredProcedure);

                    cart = new Cart
                    {
                        CartID = newCartId,
                        UserID = userId,
                        CartStatus = "Active",
                        CreatedDate = DateTime.Now
                    };
                }

                return cart;
            }
        }

        public IEnumerable<CartDetailDto> GetCartDetails(int cartId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_CartID", cartId);

                var details = Connection.Query<CartDetailDto>(
                    "Proc_GetCartDetails",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);

                return details ?? Enumerable.Empty<CartDetailDto>();
            }
        }

        public decimal GetTotalAmount(int cartId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_CartID", cartId);

                return Connection.ExecuteScalar<decimal>(
                    "Proc_GetCartTotal",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public int AddToCart(int cartId, int productId, int quantity)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_CartID", cartId);
                parameters.Add("in_ProductID", productId);
                parameters.Add("in_Quantity", quantity);

                return Connection.Execute(
                    "Proc_AddToCart",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public int RemoveFromCart(int cartDetailId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_CartDetailID", cartDetailId);

                return Connection.Execute(
                    "Proc_RemoveFromCart",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public int UpdateQuantity(int cartDetailId, int quantity)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_CartDetailID", cartDetailId);
                parameters.Add("in_Quantity", quantity);

                return Connection.Execute(
                    "Proc_UpdateCartQuantity",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public void ClearCart(int cartId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_CartID", cartId);

                Connection.Execute(
                    "Proc_ClearCart",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
    }
}
