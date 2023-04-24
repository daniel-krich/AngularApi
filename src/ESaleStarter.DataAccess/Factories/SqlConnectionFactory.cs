using Microsoft.Extensions.Configuration;
using ESaleStarter.DataAccess.Interfaces;
using System.Data.SqlClient;

namespace ESaleStarter.DataAccess.Factories;

public class SqlConnectionFactory : ISqlConnectionFactory
{
    private readonly IConfiguration _configuration;

    public SqlConnectionFactory(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public SqlConnection CreateConnection()
    {
        return new SqlConnection(_configuration.GetConnectionString("ESaleStarterDb"));
    }
}