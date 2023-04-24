using ESaleStarter.DataAccess.Interfaces;
using ESaleStarter.Model.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.DataAccess.Data;

public class ItemData : IItemData
{
    private readonly IRelationalDbAccess _dbAccess;

    public ItemData(IRelationalDbAccess dbAccess)
    {
        _dbAccess = dbAccess;
    }

    public Task<IEnumerable<ItemModel>> GetAllAsync()
    {
        return _dbAccess.QueryManyAsync<ItemModel, dynamic>("dbo.spItems_GetAll", new { });
    }

    public Task<ItemModel?> GetByIdAsync(int id)
    {
        return _dbAccess.QueryFirstAsync<ItemModel, dynamic>("dbo.spItems_GetById", new { Id = id });
    }

    public async Task<bool> DeleteByIdAsync(int id)
    {
        return await _dbAccess.ExecuteAsync("dbo.spItems_DeleteById", new { Id = id }) > 0;
    }
}