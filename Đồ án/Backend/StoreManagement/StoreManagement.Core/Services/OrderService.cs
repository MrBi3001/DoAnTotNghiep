//using StoreManagement.Core.Entities;
//using StoreManagement.Core.Interfaces.Infrastructure;
//using StoreManagement.Core.Interfaces.Services;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace StoreManagement.Core.Services
//{
//    public class OrderService : IOrderService
//    {
//        IOrderRepository _orderRepository;
//        public OrderService(IOrderRepository orderRepository)
//        {
//            _orderRepository = orderRepository;
//        }

//        public int InsertService(Order order)
//        {
//            return _orderRepository.Insert(order);
//        }

//        public int UpdateService(Order order)
//        {
//            return _orderRepository.Update(order);
//        }
//    }
//}
