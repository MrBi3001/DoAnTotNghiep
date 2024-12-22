using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.DTOs
{
    public class CartDetailDto
    {
        public int CartDetailID { get; set; }
        public int CartID { get; set; }
        public int ProductID { get; set; }
        public int Quantity { get; set; }
        public string CartDetailStatus { get; set; }

        // Thông tin bổ sung từ Product
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }

        public int StockQuantity { get; set; }
        // Tính toán tổng tiền cho mỗi item
        public decimal SubTotal => Price * Quantity;
    }
}
