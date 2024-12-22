using Microsoft.AspNetCore.Mvc;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Exceptions;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using StoreManagement.Core.Services;

namespace StoreManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        IBrandRepository _brandRepository;
        IBrandService _brandService;

        public BrandController(IBrandRepository brandRepository, IBrandService brandService)
        {
            _brandRepository = brandRepository;
            _brandService = brandService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var brands = _brandRepository.GetAll();
            return Ok(brands);
        }

        [HttpGet("GetProductBy/{brandID}")]
        public IActionResult GetByID(int brandID)
        {
            try
            {
                var band = _brandRepository.GetByID(brandID);

                return Ok(band);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public IActionResult Post(Brand brand)
        {
            try
            {
                var res = _brandService.InsertService(brand);

                return Ok(res);
            }

            catch (ValidateException ex)
            {
                var response = new
                {
                    devMsg = ex.Message,
                    userMsg = ex.Message,
                    data = brand,
                };

                return BadRequest(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut]
        public IActionResult Put(Brand brand)
        {
            try
            {
                var rowEffect = _brandService.UpdateService(brand);

                return Ok(rowEffect);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
