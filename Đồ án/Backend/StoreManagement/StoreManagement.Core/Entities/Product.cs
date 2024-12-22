using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Entities
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double Price { get; set; }
        public int StockQuantity { get; set; }
        public int CategoryID { get; set; }
        public int BrandID { get; set; }
        public string ProductStatus { get; set; }
        public string Image { get; set; } = string.Empty;
        public string Specifications { get; set; } = string.Empty;
    }
}
