import { HttpError } from "../utils/http-error.util.js";
import { validateAccessToken } from "../utils/jwt.util.js";

export const authenticationMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    const user = validateAccessToken(token);
    req.user = user;
    next();
  } else {
    throw new HttpError("Missing credentials");
  }
};
