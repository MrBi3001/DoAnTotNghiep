using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Exceptions;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;

namespace StoreManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        IProductRepository _productRepository;
        IProductService _productService;

        public ProductController(IProductRepository productRepository, IProductService productService)
        {
            _productRepository = productRepository;
            _productService = productService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var products = _productRepository.GetAll();

            return Ok(products);
        }

        [HttpGet("{productId}")]
        public IActionResult GetbyID(int productId)
        {
            try
            {
                var product = _productRepository.GetByID(productId);

                var images = _productRepository.GetImage(productId);

                return Ok(new { product, images });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("ByCategory/{categoryID}")]
        public IActionResult GetByCategoryID(int categoryID)
        {
            try
            {
                var products = _productRepository.GetByCategoryId(categoryID);

                return Ok(products);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("ByBrand/{brandID}")]
        public IActionResult GetByBrandID(int brandID)
        {
            try
            {
                var products = _productRepository.GetByBrandId(brandID);

                return Ok(products);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            try
            {
                var res = _productService.InsertService(product);

                return Ok(res);
            }

            catch (ValidateException ex)
            {
                var response = new
                {
                    devMsg = ex.Message,
                    userMsg = ex.Message,
                    data = product,
                };

                return BadRequest(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut]
        public IActionResult Put(Product product)
        {
            try
            {
                var rowEffect = _productService.UpdateService(product);

                return Ok(rowEffect);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
