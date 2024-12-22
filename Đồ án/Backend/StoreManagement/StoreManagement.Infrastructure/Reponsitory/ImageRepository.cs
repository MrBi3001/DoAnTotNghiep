using Dapper;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Interfaces.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class ImageRepository : BaseRepository<Image>, IImageRepository
    {
        public ImageRepository(IConfiguration configuration) : base(configuration)
        {

        }

        public Image GetByProductID(int productID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCmd = "SELECT * FROM Image WHERE ProductID = @ProductID";

                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("ProductID", productID);

                var entity = Connection.QueryFirstOrDefault<Image>(sqlCmd, param: parameters);

                return entity;
            }    
        }

        public int Insert(Image image)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCommand = "Proc_InsertImage";
                DynamicParameters parameters = new();
                parameters.Add("@in_ProductID", image.ProductID);
                parameters.Add("@in_ImageFileName", image.ImageFileName);

                var rowEffect = Connection.Execute(sqlCommand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return rowEffect;
            }
        }

        public bool IsDuplicate(int imageID)
        {
            throw new NotImplementedException();
        }

        public int Update(Image image)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                var sqlCommand = "Proc_UpdateImage";
                DynamicParameters parameters = new();
                parameters.Add("@in_ImageID", image.ImageID);
                parameters.Add("@in_ProductID", image.ProductID);
                parameters.Add("@in_ImageFileName", image.ImageFileName);

                var rowEffect = Connection.Execute(sqlCommand, param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                return rowEffect;
            }
        }
    }
}
