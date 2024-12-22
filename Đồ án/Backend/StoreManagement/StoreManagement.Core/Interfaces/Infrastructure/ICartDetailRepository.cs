using StoreManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface ICartDetailRepository : IBaseRepository<CartDetail>
    {
        int Insert(CartDetail cartDetail);

        int Update(CartDetail cartDetail);

        IEnumerable<CartDetail> GetByCartId(int cartID);

        bool IsDuplicate(int cartDetailID);

    }
}
