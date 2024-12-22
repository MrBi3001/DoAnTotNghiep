using StoreManagement.Core.Entities;
using StoreManagement.Core.Exceptions;
using StoreManagement.Core.Interfaces.Infrastructure;
using StoreManagement.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreManagement.Core.Services
{
    public class ImageService : IImageService
    {
        IImageRepository _imageRepository;

        public ImageService(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }

        public int InsertService(Image image)
        {
            //var checkID = _imageRepository.IsDuplicate(image.ImageID);

            //if (checkID)
            //{
            //    throw new ValidateException("Hãng đã tồn tại!");
            //}

            return _imageRepository.Insert(image);
        }

        public int UpdateService(Image image)
        {
            return _imageRepository.Update(image);
        }
    }
}
