using Microsoft.Extensions.Configuration;
using MySqlConnector;
using StoreManagement.Core.Interfaces.Infrastructure;
using Drapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using StoreManagement.Core;

namespace StoreManagement.Infrastructure.Reponsitory
{
    public class BaseRepository<Entity> : IBaseRepository<Entity> where Entity : class
    {
        protected readonly IConfiguration Configuration;

        protected MySqlConnection Connection;
        string _class;

        public BaseRepository (IConfiguration configuration)
        {
            Configuration = configuration;
            _class = typeof(Entity).Name;
        }
        
        public IEnumerable<Entity> GetAll()
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                //Tạo biến result lưu trữ kết quả sau khi querry
                var entities = Connection.Query<Entity>($"Proc_GetAll{_class}", commandType: System.Data.CommandType.StoredProcedure);
                
                //Trả kết quả
                return entities;
            }
        }

        public Entity GetByID(int ID)
        {
            using (Connection = new MySqlConnection(Configuration.GetConnectionString(Constant.ConnectionString)))
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add($"in_{_class}ID", ID);

                //Tạo biến result lưu trữ kết quả sau khi querry
                var entity = Connection.QueryFirstOrDefault<Entity>($"Proc_Get{_class}ByID", param: parameters, commandType: System.Data.CommandType.StoredProcedure);

                //Trả kết quả
                return entity;
            }
        }
    }
}
