using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ESaleStarter.DataAccess.Interfaces;
using ESaleStarter.Model.Categories;
using ESaleStarter.Model.Categories.DTOs;

namespace ESaleStarter.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryData _categoryData;

        public CategoriesController(ICategoryData categoryData)
        {
            _categoryData = categoryData;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryModel>>> GetAllCategories()
        {
            return Ok(await _categoryData.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryWithItemsModel>> GetCategoryById(int id)
        {
            var category = await _categoryData.GetFullByIdAsync(id);
            if (category != null)
            {
                return Ok(category);
            }
            else return NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            if(await _categoryData.DeleteCategoryAsync(id))
            {
                return Ok();
            }
            else return NotFound();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory([FromRoute] int id, [FromBody] CreateUpdateCategoryDto category)
        {
            if (await _categoryData.UpdateCategoryAsync(id, category))
            {
                return Ok();
            }
            else return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<CategoryModel>> CreateCategory([FromBody] CreateUpdateCategoryDto category)
        {
            var categoryModel = await _categoryData.CreateCategoryAsync(category);
            return Ok(categoryModel);
        }
    }
}