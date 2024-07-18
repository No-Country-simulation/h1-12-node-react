import { HTTP_CODES } from "../utils/http-codes.util.js";
import { HttpError } from "../utils/http-error.util.js";
import { validateAccessToken } from "../utils/jwt.util.js";

export const authenticationMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization
  if (!authorization) {
    throw new HttpError('Missing credentials', HTTP_CODES.UNAUTHORIZED)
  } 
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    throw new HttpError("Missing credentials");
  }
  const user = validateAccessToken(token);
  req.user = user;
  next();
};
