using Dapper;
using ESaleStarter.DataAccess.Interfaces;
using System.Data;

namespace ESaleStarter.DataAccess.DbAccess;

public class RelationalDbAccess : IRelationalDbAccess
{
    public ISqlConnectionFactory DbFactory { get; }

    public RelationalDbAccess(ISqlConnectionFactory dbFactory)
    {
        DbFactory = dbFactory;
    }

    public async Task<IEnumerable<TGET>> QueryManyAsync<TGET, TPARAM>(string storedProcedure, TPARAM param)
    {
        await using (var connection = DbFactory.CreateConnection())
        {
            return await connection.QueryAsync<TGET>(storedProcedure, param, commandType: CommandType.StoredProcedure);
        }
    }

    public async Task<TGET?> QueryFirstAsync<TGET, TPARAM>(string storedProcedure, TPARAM param)
    {
        await using (var connection = DbFactory.CreateConnection())
        {
            return await connection.QueryFirstOrDefaultAsync<TGET?>(storedProcedure, param, commandType: CommandType.StoredProcedure);
        }
    }

    public async Task<int> ExecuteAsync<TPARAM>(string storedProcedure, TPARAM param)
    {
        await using (var connection = DbFactory.CreateConnection())
        {
            return await connection.ExecuteAsync(storedProcedure, param, commandType: CommandType.StoredProcedure);
        }
    }

    public async Task<TGET> ExecuteWithReturnAsync<TPARAM, TGET>(string storedProcedure, TPARAM param)
    {
        await using (var connection = DbFactory.CreateConnection())
        {
            return await connection.ExecuteScalarAsync<TGET>(storedProcedure, param, commandType: CommandType.StoredProcedure);
        }
    }
}