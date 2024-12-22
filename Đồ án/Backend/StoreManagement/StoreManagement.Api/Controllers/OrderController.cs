using Microsoft.AspNetCore.Mvc;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Exceptions;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using StoreManagement.Core.Services;
using StoreManagement.Infrastructure.Reponsitory;
using Microsoft.Extensions.Configuration;

namespace StoreManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class OrderController : ControllerBase
    {
        //IOrderService _orderService;
        IOrderDetailService _orderDetailService;
        IOrderRepository _orderRepository;
        IOrderDetailRepository _orderDetailRepository;
        private readonly ICartRepository _cartRepository;
        private readonly VNPayService _vnpayService;
        private readonly IConfiguration _configuration;

        public OrderController( IOrderDetailService orderDetailService, IOrderRepository orderRepository, IOrderDetailRepository orderDetailRepository, ICartRepository cartRepository, VNPayService vNPayService, IConfiguration configuration)
        {
            //_orderService = orderService;
            _orderDetailService = orderDetailService;
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _cartRepository = cartRepository;
            _vnpayService = vNPayService;
            _configuration = configuration;
        }

        
        [HttpPost("create")]
        public IActionResult CreateOrder(int userId, int paymentMethodId)
        {
            var cart = _cartRepository.GetCartByUserId(userId);
            var cartDetails = _cartRepository.GetCartDetails(cart.CartID);
            var totalAmount = _cartRepository.GetTotalAmount(cart.CartID);

            var order = new Order
            {
                UserID = userId,
                OrderDate = DateTime.Now,
                TotalAmount = totalAmount,
                OrderStatus = "Pending",
                PaymentMethodID = paymentMethodId,
                OrderKBN = "Normal"
            };

            var orderId = _orderRepository.CreateOrder(order);

            foreach (var item in cartDetails)
            {
                var orderDetail = new OrderDetail
                {
                    OrderID = orderId,
                    ProductID = item.ProductID,
                    Quantity = item.Quantity,
                    SalePrice = item.Price,
                    OrderDetailStatus = "Active"
                };
                _orderRepository.CreateOrderDetail(orderDetail);
            }

            _cartRepository.ClearCart(cart.CartID);

            return Ok(new { OrderId = orderId, Message = "Order created successfully" });
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetUserOrders(int userId)
        {
            var orders = _orderRepository.GetOrdersByUserId(userId);
            return Ok(orders);
        }

        [HttpGet("{orderId}")]
        public IActionResult GetOrderDetails(int orderId)
        {
            var orderDetails = _orderRepository.GetOrderDetails(orderId);
            return Ok(orderDetails);
        }
        //[HttpPost("payment")]
        //public IActionResult ProcessPayment(int orderId)
        //{
        //    var order = _orderRepository.GetById(orderId);
        //    if (order == null)
        //        return NotFound(new { Message = "Order not found" });

        //    if (order.PaymentMethodID == 2) // VNPay
        //    {
        //        var returnUrl = $"{Request.Scheme}://{Request.Host}/api/order/payment/callback";
        //        var paymentUrl = _vnpayService.CreatePaymentUrl(order, returnUrl);
        //        return Ok(new { PaymentUrl = paymentUrl });
        //    }

        //    return BadRequest(new { Message = "Invalid payment method" });
        //}

        //[HttpGet("payment/callback")]
        //public IActionResult PaymentCallback([FromQuery] Dictionary<string, string> vnpayData)
        //{
        //    var vnpayConfig = _configuration.GetSection("VNPay");
        //    var vnpay = new VnPayLibrary();

        //    foreach (var (key, value) in vnpayData)
        //    {
        //        vnpay.AddResponseData(key, value);
        //    }

        //    var orderId = Convert.ToInt32(vnpay.GetResponseData("vnp_TxnRef"));
        //    var vnPayTranId = Convert.ToInt64(vnpay.GetResponseData("vnp_TransactionNo"));
        //    var vnpResponseCode = vnpay.GetResponseData("vnp_ResponseCode");

        //    if (vnpResponseCode == "00")
        //    {
        //        _orderRepository.UpdateOrderStatus(orderId, "Processing");
        //        return Ok(new { Message = "Payment successful" });
        //    }

        //    return BadRequest(new { Message = "Payment failed" });
        //}
        //[HttpPost("payment/vnpay")]
        //public IActionResult CreateVNPayPayment(int orderId)
        //{
        //    var order = _orderRepository.GetById(orderId);
        //    if (order == null)
        //        return NotFound(new { Message = "Order not found" });

        //    var returnUrl = $"{Request.Scheme}://{Request.Host}/api/order/payment/vnpay-return";
        //    var paymentUrl = _vnpayService.CreatePaymentUrl(order, returnUrl);

        //    return Ok(new { PaymentUrl = paymentUrl });
        //}

        //[HttpGet("payment/vnpay-return")]
        //public IActionResult VNPayReturn([FromQuery] Dictionary<string, string> vnpayData)
        //{
        //    var vnpay = new VnPayLibrary();
        //    foreach (var (key, value) in vnpayData)
        //    {
        //        vnpay.AddResponseData(key, value);
        //    }

        //    var orderId = vnpay.GetResponseData("vnp_TxnRef");
        //    var vnPayTranId = vnpay.GetResponseData("vnp_TransactionNo");
        //    var vnpResponseCode = vnpay.GetResponseData("vnp_ResponseCode");

        //    if (vnpResponseCode == "00")
        //    {
        //        return Ok(new
        //        {
        //            Success = true,
        //            Message = "Thanh toán thành công",
        //            OrderId = orderId,
        //            TransactionId = vnPayTranId
        //        });
        //    }

        //    return BadRequest(new
        //    {
        //        Success = false,
        //        Message = "Thanh toán thất bại",
        //        OrderId = orderId
        //    });
        //}


    }
}
