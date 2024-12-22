using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Entities
{
    public class Image
    {
        public int ImageID { get; set; }
        public int ProductID { get; set; }
        public string ImageFileName { get; set; } = string.Empty;
    }
}
