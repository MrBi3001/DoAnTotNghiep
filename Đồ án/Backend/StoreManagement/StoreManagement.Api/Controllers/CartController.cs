using Microsoft.AspNetCore.Mvc;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Exceptions;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using StoreManagement.Core.Services;
using StoreManagement.Infrastructure.Reponsitory;

namespace StoreManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        ICartRepository _cartRepository;
        ICartService _cartService;

        ICartDetailRepository _cartDetailRepository;
        ICartDetailService _cartDetailService;

        public CartController(ICartRepository cartRepository, ICartService cartService, ICartDetailRepository cartDetailRepository, ICartDetailService cartDetailService)
        {
            _cartRepository = cartRepository;
            _cartService = cartService;
            _cartDetailRepository = cartDetailRepository;
            _cartDetailService = cartDetailService;
        }


        [HttpGet("{userId}")]
        public IActionResult GetCart(int userId)
        {
            try
            {
                var cart = _cartRepository.GetCartByUserId(userId);
                var details = _cartRepository.GetCartDetails(cart.CartID);
                var total = _cartRepository.GetTotalAmount(cart.CartID);

                return Ok(new
                {
                    Cart = cart,
                    Details = details,
                    TotalAmount = total
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "Error getting cart information" });
            }
        }

        [HttpPost("add")]
        public IActionResult AddToCart(int userId, int productId, int quantity)
        {
            try
            {
                var cart = _cartRepository.GetCartByUserId(userId);
                var result = _cartRepository.AddToCart(cart.CartID, productId, quantity);

                return Ok(new { CartId = cart.CartID, Message = "Product added successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "Error adding product to cart" });
            }
        }
        [HttpDelete("remove/{cartDetailId}")]
        public IActionResult RemoveFromCart(int cartDetailId)
        {
            try
            {
                var result = _cartRepository.RemoveFromCart(cartDetailId);
                return Ok(new { Message = "Product removed successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "Error removing product from cart" });
            }
        }

        [HttpPut("update/{cartDetailId}")]
        public IActionResult UpdateQuantity(int cartDetailId, int quantity)
        {
            try
            {
                var result = _cartRepository.UpdateQuantity(cartDetailId, quantity);
                return Ok(new { Message = "Quantity updated successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "Error updating quantity" });
            }
        }


    }
}
