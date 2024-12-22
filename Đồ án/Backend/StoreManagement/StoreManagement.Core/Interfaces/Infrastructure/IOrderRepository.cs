using StoreManagement.Core.DTOs;
using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface IOrderRepository : IBaseRepository<Order>
    {
        int CreateOrder(Order order);
        void CreateOrderDetail(OrderDetail orderDetail);
        IEnumerable<OrderDto> GetOrdersByUserId(int userId);
        OrderDetailDto GetOrderDetails(int orderId);
        void UpdateOrderStatus(int orderId, string status);

        Order GetById(int orderId);

    }
}
