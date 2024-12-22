using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.DTOs
{
    public class OrderDetailDto
    {
        public int OrderID { get; set; }
        public int UserID { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public string OrderStatus { get; set; }
        public int PaymentMethodID { get; set; }
        public string OrderKBN { get; set; }
        public List<ProductDto> Products { get; set; }
    }

}
