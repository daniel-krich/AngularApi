using ESaleStarter.Model.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.DataAccess.Interfaces;

public interface IItemData
{
    Task<IEnumerable<ItemModel>> GetAllAsync();
    Task<ItemModel?> GetByIdAsync(int id);
    Task<bool> DeleteByIdAsync(int id);
}