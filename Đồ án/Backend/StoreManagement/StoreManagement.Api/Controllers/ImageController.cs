using Microsoft.AspNetCore.Mvc;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using System.Linq.Expressions;

namespace StoreManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        IImageRepository _imageRepository;
        IImageService _imageService;

        public ImageController(IImageRepository imageRepository, IImageService imageService)
        {
            _imageRepository = imageRepository;
            _imageService = imageService;
        }

        [HttpGet("ProductID")]
        public IActionResult GetImageByProductID(int productID)
        {
            try
            {
                var images = _imageRepository.GetByProductID(productID);
                return Ok(images);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
