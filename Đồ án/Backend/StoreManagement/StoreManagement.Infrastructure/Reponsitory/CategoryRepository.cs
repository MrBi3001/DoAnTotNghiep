using Microsoft.Extensions.Configuration;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration)
        {

        }

        public int Insert(Category category)
        {
            throw new NotImplementedException();
        }

        public bool IsDuplicate(int categoryID)
        {
            throw new NotImplementedException();
        }

        public int Update(Category category)
        {
            throw new NotImplementedException();
        }
    }
}
