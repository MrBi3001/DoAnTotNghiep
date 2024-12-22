using Microsoft.AspNetCore.Mvc;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;

namespace StoreManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryRepository _categoryRepository;
        ICategoryService _categoryService;

        public CategoryController(ICategoryRepository categoryRepository, ICategoryService categoryService)
        {
            _categoryRepository = categoryRepository;
            _categoryService = categoryService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var categories = _categoryRepository.GetAll();

                return Ok(categories);
            }
            catch (Exception ex)
            {
                var response = new
                {
                    devMsg = ex.Message,
                    errMsg = ex.Message
                };

                return BadRequest(response);
            }
        }
    }
}
