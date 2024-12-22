using Microsoft.Extensions.Configuration;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using MySqlConnector;
using Dapper;
using static Dapper.SqlMapper;
using StoreManagement.Core;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository (IConfiguration configuration) : base(configuration)
        {

        }

        public IEnumerable<Product> GetByCategoryId(int categoryID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add($"in_CategoryID", categoryID);

                //Tạo biến result lưu trữ kết quả sau khi querry
                var entitíes = Connection.Query<Product>($"Proc_GetProductByCategoryID", param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                //Trả kết quả
                return entitíes;
            }
        }

        public IEnumerable<Product> GetByBrandId(int brandID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add($"in_BrandID", brandID);

                //Tạo biến result lưu trữ kết quả sau khi querry
                var entitíes = Connection.Query<Product>($"Proc_GetProductByBrandID", param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                //Trả kết quả
                return entitíes;
            }
        }


        public int Insert(Product product)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCommand = "Proc_InsertProduct";
                DynamicParameters parameters = new();
                parameters.Add("@in_ProductID", product.ProductID);
                parameters.Add("@in_ProductName", product.ProductName);
                parameters.Add("@in_Description", product.Description);
                parameters.Add("@in_Price", product.Price);
                parameters.Add("@in_StockQuantity", product.StockQuantity);
                parameters.Add("@in_CategoryID", product.CategoryID);
                parameters.Add("@in_BrandID", product.BrandID);
                parameters.Add("@in_Image", product.Image);

                var rowEffect = Connection.Execute(sqlCommand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return rowEffect;
            }
        }

        public int Update(Product product)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCommand = "Proc_UpdateProduct";
                DynamicParameters parameters = new();
                parameters.Add("@in_ProductID", product.ProductID);
                parameters.Add("@in_ProductName", product.ProductName);
                parameters.Add("@in_Description", product.Description);
                parameters.Add("@in_Price", product.Price);
                parameters.Add("@in_StockQuantity", product.StockQuantity);
                parameters.Add("@in_CategoryID", product.CategoryID);
                parameters.Add("@in_BrandID", product.BrandID);
                parameters.Add("@in_ProductStatus", product.ProductStatus);
                parameters.Add("@in_Image", product.Image);
                parameters.Add("@in_Specifications", product.Specifications);

                var rowEffect = Connection.Execute(sqlCommand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return rowEffect;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="productID"></param>
        /// <returns></returns>
        public bool IsDuplicate(int productID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCmdCheck = "SELECT ProductID FROM product WHERE ProductID = @ProductID";

                DynamicParameters parameters = new ();
                parameters.Add("ProductID", productID);

                var objDuplicate = Connection.QueryFirstOrDefault<string>(sqlCmdCheck, param: parameters);

                if (objDuplicate == null)
                {
                    return false;
                }

                return true;
            }
        }

        public IEnumerable<string> GetImage(int productID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCmdCheck = "SELECT ImageFileName FROM image WHERE ProductID = @ProductID";

                DynamicParameters parameters = new();
                parameters.Add("ProductID", productID);

                var objDuplicate = Connection.Query<string>(sqlCmdCheck, param: parameters);

                return objDuplicate;
            }
        }
    }
}
