using Dapper;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Org.BouncyCastle.Asn1.Cmp.Challenge;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class OrderDetailRepository : BaseRepository<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(IConfiguration configuration) : base(configuration)
        {

        }

        public int Insert(OrderDetail orderDetail)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlComand = "Proc_InsertOrderDetail";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@in_OrderID", orderDetail.OrderID);
                parameters.Add("@in_ProductID", orderDetail.ProductID);
                parameters.Add("@in_Quantity", orderDetail.Quantity);
                parameters.Add("@in_SalePrice", orderDetail.SalePrice);
                parameters.Add("@in_OrderDetailStatus", orderDetail.OrderDetailStatus);

                var rowEffect = Connection.Execute(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);
                return rowEffect;
            }
        }

        public int Update(OrderDetail orderDetail)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlComand = "Proc_UdpateOrderDetail";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@in_OrderDetailID", orderDetail.OrderDetailID);
                parameters.Add("@in_OrderID", orderDetail.OrderID);
                parameters.Add("@in_ProductID", orderDetail.ProductID);
                parameters.Add("@in_Quantity", orderDetail.Quantity);
                parameters.Add("@in_SalePrice", orderDetail.SalePrice);
                parameters.Add("@in_OrderDetailStatus", orderDetail.OrderDetailStatus);

                var rowEffect = Connection.Execute(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);
                return rowEffect;
            }
        }
    }
}
