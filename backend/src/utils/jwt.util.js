import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.config.js";
import { HttpError } from "./http-error.util.js";
import { HTTP_CODES } from "./http-codes.util.js";

export const generateAccessToken = (payload) => {
  return jwt.sign(payload , JWT_SECRET, { expiresIn: "1h" });
}

export const validateAccessToken = (token) => {
    let user;
    jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
        if (err) {
            throw new HttpError('Invalid token', HTTP_CODES.UNAUTHORIZED)
        }
        user = decodedUser
    });
    return user
}