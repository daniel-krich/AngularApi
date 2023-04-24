using Dapper;
using ESaleStarter.DataAccess.Interfaces;
using ESaleStarter.Model.Categories;
using ESaleStarter.Model.Categories.DTOs;
using ESaleStarter.Model.Items;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.DataAccess.Data;

public class CategoryData : ICategoryData
{
    private readonly IRelationalDbAccess _dbAccess;

    public CategoryData(IRelationalDbAccess dbAccess)
    {
        _dbAccess = dbAccess;
    }

    public async Task<CategoryModel?> CreateCategoryAsync(CreateUpdateCategoryDto category)
    {
        var catId = await _dbAccess.ExecuteWithReturnAsync<dynamic, int>("spCategories_Create", new { category.Name, category.Description, category.ImageUrl });
        var categoryModel = await this.GetByIdAsync(catId);
        return categoryModel;
    }

    public async Task<bool> DeleteCategoryAsync(int id)
    {
        return await _dbAccess.ExecuteAsync<dynamic>("spCategories_DeleteById", new { Id = id }) > 0;
    }

    public Task<IEnumerable<CategoryModel>> GetAllAsync()
    {
        return _dbAccess.QueryManyAsync<CategoryModel, dynamic>("dbo.spCategories_GetAll", new { });
    }

    public Task<CategoryModel?> GetByIdAsync(int id)
    {
        return _dbAccess.QueryFirstAsync<CategoryModel, dynamic>("dbo.spCategories_GetById", new { Id = id });
    }

    public async Task<CategoryWithItemsModel?> GetFullByIdAsync(int id)
    {
        await using (var connection = _dbAccess.DbFactory.CreateConnection())
        {
            CategoryWithItemsModel? category = null;

            var results = await connection.QueryAsync<CategoryWithItemsModel, CategoryItemModel, CategoryWithItemsModel>("spCategories_GetCategoryWithItemsById",
                (fullCategory, catItem) =>
                {
                    if (category == null)
                        category = fullCategory;

                    if (catItem != null)
                        category.Items.Add(catItem);

                    return category;
                },
            new { Id = id },
            splitOn: nameof(CategoryItemModel.ItemId),
            commandType: CommandType.StoredProcedure);

            return category;
        }
    }

    public async Task<bool> UpdateCategoryAsync(int id, CreateUpdateCategoryDto category)
    {
        return await _dbAccess.ExecuteAsync<dynamic>("spCategories_UpdateById", new { Id = id, category.Name, category.Description, category.ImageUrl }) > 0;
    }
}