import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.config.js";

export const generateAccessToken = (payload) => {
  return jwt.sign(payload , JWT_SECRET, { expiresIn: "1h" });
}

export const validateAccessToken = (token) => {
    let user;
    jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
        if (err) {
            console.log(err)
            return res.sendStatus(403);
        }
        user = decodedUser
    });
    return user
}