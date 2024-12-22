using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Entities
{
    public class Cart
    {
        public int CartID { get; set; }
        public int UserID { get; set; }
        public String CartStatus { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
