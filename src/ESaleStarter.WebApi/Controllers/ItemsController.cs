using ESaleStarter.DataAccess.Interfaces;
using ESaleStarter.Model.Items;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ESaleStarter.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemData _itemsData;

        public ItemsController(IItemData itemsData)
        {
            _itemsData = itemsData;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemModel>>> GetAllItems()
        {
            var items = await _itemsData.GetAllAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ItemModel>> GetItemById([FromRoute] int id)
        {
            var item = await _itemsData.GetByIdAsync(id);
            if(item != null)
            {
                return Ok(item);
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemById([FromRoute] int id)
        {
            if (await _itemsData.DeleteByIdAsync(id))
            {
                return Ok();
            }
            else return NotFound();
        }
    }
}