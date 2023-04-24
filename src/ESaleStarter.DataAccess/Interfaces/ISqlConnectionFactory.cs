using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.DataAccess.Interfaces;

public interface ISqlConnectionFactory
{
    SqlConnection CreateConnection();
}