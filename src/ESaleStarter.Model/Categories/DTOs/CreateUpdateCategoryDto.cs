using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESaleStarter.Model.Categories.DTOs;

public class CreateUpdateCategoryDto
{
    [Required, MaxLength(50)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(255)]
    public string Description { get; set; } = string.Empty;

    [MaxLength(255)]
    public string? ImageUrl { get; set; }
}