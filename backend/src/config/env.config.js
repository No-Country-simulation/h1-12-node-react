import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === 'development' ? '.env.dev' : '.env'
dotenv.config({ path: envFile });

console.log(`NODE_ENV: ${process.env.NODE_ENV || 'production'}`);
console.log(`Using environment file: ${envFile}`);

export const PORT = process.env.PORT || 3001;
export const JWT_SECRET = process.env.JWT_SECRET;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
export const ADMIN_PASS = process.env.ADMIN_PASS;
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const FRONT_LINK = process.env.FRONT_LINK;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET