using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Interfaces.Infrastructure
{
    public interface IBaseRepository<Entity>
    {
        IEnumerable<Entity> GetAll();

        Entity GetByID(int ID);
    }
}
