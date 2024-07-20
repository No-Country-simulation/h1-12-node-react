import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: process.env.NODE_ENV === 'development' ? 'dev' : 'uploads',
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