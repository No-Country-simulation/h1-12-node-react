import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const imageStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: process.env.NODE_ENV === 'development' ? 'dev/images' : 'uploads/images',
      allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'],
      transformation: [
        {
          width: 500,
          height: 500,
          crop: 'limit',
          quality: 'auto',
        },
      ],
    },
});

export const documentStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: process.env.NODE_ENV === 'development' ? 'dev/documents' : 'uploads/documents',
    allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'],
  },
});