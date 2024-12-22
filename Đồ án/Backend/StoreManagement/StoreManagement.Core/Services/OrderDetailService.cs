using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Services
{
    public class OrderDetailService : IOrderDetailService
    {
        IOrderDetailRepository _orderDetailRepository;

        public OrderDetailService(IOrderDetailRepository orderDetailRepository)
        {
            _orderDetailRepository = orderDetailRepository;
        }

        public int Insert(OrderDetail orderDetail)
        {
            return _orderDetailRepository.Insert(orderDetail);
        }

        public int Update(OrderDetail orderDetail)
        {
            return _orderDetailRepository.Update(orderDetail);
        }
    }
}
