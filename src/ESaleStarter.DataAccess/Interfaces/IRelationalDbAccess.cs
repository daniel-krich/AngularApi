using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.DataAccess.Interfaces;

public interface IRelationalDbAccess
{
    ISqlConnectionFactory DbFactory { get; }
    Task<int> ExecuteAsync<TPARAM>(string storedProcedure, TPARAM param);
    Task<TGET> ExecuteWithReturnAsync<TPARAM, TGET>(string storedProcedure, TPARAM param);
    Task<TGET?> QueryFirstAsync<TGET, TPARAM>(string storedProcedure, TPARAM param);
    Task<IEnumerable<TGET>> QueryManyAsync<TGET, TPARAM>(string storedProcedure, TPARAM param);
}