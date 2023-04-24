using ESaleStarter.Model.Categories;
using ESaleStarter.Model.Categories.DTOs;
using ESaleStarter.Model.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.DataAccess.Interfaces;

public interface ICategoryData
{
    Task<CategoryModel?> GetByIdAsync(int id);
    Task<IEnumerable<CategoryModel>> GetAllAsync();
    Task<CategoryWithItemsModel?> GetFullByIdAsync(int id);
    Task<CategoryModel?> CreateCategoryAsync(CreateUpdateCategoryDto category);
    Task<bool> UpdateCategoryAsync(int id, CreateUpdateCategoryDto category);
    Task<bool> DeleteCategoryAsync(int id);

}