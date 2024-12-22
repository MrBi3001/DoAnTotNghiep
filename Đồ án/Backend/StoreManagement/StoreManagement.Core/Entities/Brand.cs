using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Entities
{
    public class Brand
    {
        public int BrandID { get; set; }
        public string BrandName { get; set; } = string.Empty;
        public string BrandStatus { get; set; }
    }
}