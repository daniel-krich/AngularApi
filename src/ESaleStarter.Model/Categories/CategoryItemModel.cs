using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.Model.Categories;

public class CategoryItemModel
{
	public int ItemId { get; set; }
	public string ItemName { get; set; } = string.Empty;
	public string ItemDescription { get; set; } = string.Empty;
	public float Price { get; set; }
	public string ItemImageUrl { get; set; } = string.Empty;
}
