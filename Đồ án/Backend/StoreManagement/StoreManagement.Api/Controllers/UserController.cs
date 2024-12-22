using Microsoft.AspNetCore.Mvc;
using StoreManagement.Core.Entities;
using StoreManagement.Core.Exceptions;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using StoreManagement.Core.Services;
using StoreManagement.Infrastructure.Reponsitory;

namespace StoreManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        IUserRepository _userRepository;
        IUserService _userService;

        public UserController(IUserRepository userRepository, IUserService userService)
        {
            _userRepository = userRepository;
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userRepository.GetAll();

            return Ok(users);
        }

        [HttpGet("/user/{userID}")]
        public IActionResult GetByID(int userID)
        {
            try
            {
                var user = _userRepository.GetByID(userID);

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Login")]
        public IActionResult Login(string email, string password)
        {
            try
            {
                var user = _userService.Login(email, password);

                var roleName = _userRepository.GetRoleName(user.UserID);

                var response = new
                {
                    data = new 
                    { 
                        userID = user.UserID, 
                        userName = user.Name, 
                        email = user.Email,
                        role = roleName 
                    }
                };

                return Ok(response);

            }
            catch (ValidateException ex)
            {
                var response = new
                {
                    devMsg = ex.Message,
                    userMsg = ex.Message,
                    data = email,
                };

                return BadRequest(response);
            }
            catch (Exception ex)
            {
                var response = new
                {
                    devMsg = ex.Message,
                    userMsg = ex.Message,
                    data = email,
                };

                return BadRequest(response);
            }
        }

        [HttpPost]
        public IActionResult RegistrationAccount(User user)
        {
            try
            {
                var res = _userService.InsertService(user);

                return Ok(res);
            }

            catch (ValidateException ex)
            {
                var response = new
                {
                    devMsg = ex.Message,
                    userMsg = ex.Message,
                    data = user,
                };

                return BadRequest(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut]
        public IActionResult UpdateAccount(User user)
        {
            try
            {
                var rowEffect = _userService.UpdateService(user);

                return Ok(rowEffect);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
