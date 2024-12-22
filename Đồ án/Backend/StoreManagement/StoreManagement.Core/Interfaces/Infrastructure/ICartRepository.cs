using StoreManagement.Core.DTOs;
using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface ICartRepository : IBaseRepository<Cart>
    {
        Cart GetCartByUserId(int userId);
        IEnumerable<CartDetailDto> GetCartDetails(int cartId);
        decimal GetTotalAmount(int cartId);
        int AddToCart(int cartId, int productId, int quantity);
        int RemoveFromCart(int cartDetailId);
        int UpdateQuantity(int cartDetailId, int quantity);

        void ClearCart(int cartId);
    }
}
