using Dapper;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class BrandRepository : BaseRepository<Brand>, IBrandRepository
    {
        public BrandRepository(IConfiguration configuration) : base(configuration)
        {

        }

        public int Insert(Brand brand)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlComand = "Proc_InsertBrand";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@in_BrandID", brand.BrandID);
                parameters.Add("@in_BrandName", brand.BrandName);
                parameters.Add("@in_BrandStatus", brand.BrandStatus);

                var rowEffect = Connection.Execute(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);
                return rowEffect;
            }
        }
        public int Update(Brand brand)
        {
            var sqlComand = "Proc_UpdateBrand";
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@in_BrandID", brand.BrandID);
            parameters.Add("@in_BrandName", brand.BrandName);
            parameters.Add("@in_BrandStatus", brand.BrandStatus);

            var rowEffect = Connection.Execute(sqlComand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);
            return rowEffect;
        }

        public bool IsDuplicate(int brandID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCommandCheck = $"SELECT BrandID FROM Brand WHERE BrandID = @BrandID";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add($"BrandID", brandID);

                var brandDupplicate = Connection.QueryFirstOrDefault<string>(sqlCommandCheck, param: parameters);

                if (brandDupplicate != null)
                {
                    return true;
                }

                return false;
            }
        }
    }
}
