import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const JWT_SECRET = process.env.JWT_SECRET;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
export const ADMIN_PASS = process.env.ADMIN_PASS;
export const EMAIL_ADRESS = process.env.EMAIL_ADRESS;
export const EMAIL_PASS = process.env.EMAIL_PASS;
