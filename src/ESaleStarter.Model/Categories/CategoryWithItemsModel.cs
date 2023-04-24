using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.Model.Categories;

public class CategoryWithItemsModel : CategoryModel
{
    public ICollection<CategoryItemModel> Items { get; set; } = new List<CategoryItemModel>();
}