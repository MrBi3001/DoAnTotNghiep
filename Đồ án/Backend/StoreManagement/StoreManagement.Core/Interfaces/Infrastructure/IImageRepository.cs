using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface IImageRepository : IBaseRepository<Image>
    {
        int Insert(Image image);

        int Update(Image image);

        bool IsDuplicate(int imageID);

        Image GetByProductID(int productID);
    }
}
