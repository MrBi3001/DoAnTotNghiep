using Dapper;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core;
using StoreManagement.Core.DTOs;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(IConfiguration configuration) : base(configuration)
        {

        }

        public int CreateOrder(Order order)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_UserID", order.UserID);
                parameters.Add("in_TotalAmount", order.TotalAmount);
                parameters.Add("in_PaymentMethodID", order.PaymentMethodID);
                parameters.Add("in_OrderKBN", order.OrderKBN);

                return Connection.ExecuteScalar<int>(
                    "Proc_CreateOrder",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public void CreateOrderDetail(OrderDetail orderDetail)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_OrderID", orderDetail.OrderID);
                parameters.Add("in_ProductID", orderDetail.ProductID);
                parameters.Add("in_Quantity", orderDetail.Quantity);
                parameters.Add("in_SalePrice", orderDetail.SalePrice);

                Connection.Execute(
                    "Proc_CreateOrderDetail",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public IEnumerable<OrderDto> GetOrdersByUserId(int userId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_UserID", userId);

                return Connection.Query<OrderDto>(
                    "Proc_GetOrdersByUserId",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public OrderDetailDto GetOrderDetails(int orderId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_OrderID", orderId);

                var orderDictionary = new Dictionary<int, OrderDetailDto>();

                var result = Connection.Query<OrderDetailDto, ProductDto, OrderDetailDto>(
                    "Proc_GetOrderDetails",
                    (order, product) =>
                    {
                        if (!orderDictionary.TryGetValue(order.OrderID, out var orderEntry))
                        {
                            orderEntry = order;
                            orderEntry.Products = new List<ProductDto>();
                            orderDictionary.Add(order.OrderID, orderEntry);
                        }

                        if (product != null)
                            orderEntry.Products.Add(product);

                        return orderEntry;
                    },
                    param: parameters,
                    splitOn: "ProductID",
                    commandType: CommandType.StoredProcedure
                );

                return orderDictionary.Values.FirstOrDefault();
            }
        }

        public void UpdateOrderStatus(int orderId, string status)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_OrderID", orderId);
                parameters.Add("in_OrderStatus", status);

                Connection.Execute(
                    "Proc_UpdateOrderStatus",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public Order GetById(int orderId)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var parameters = new DynamicParameters();
                parameters.Add("in_OrderID", orderId);

                return Connection.QueryFirstOrDefault<Order>(
                    "Proc_GetOrderById",
                    param: parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
    }
}
