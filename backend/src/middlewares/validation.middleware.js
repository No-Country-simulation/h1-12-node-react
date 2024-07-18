import { HTTP_CODES } from "../utils/http-codes.util.js";
import { HttpError } from "../utils/http-error.util.js";

export const validationMiddleware = (schemas) => (req, res, next) => {
    try {
        for(let i = 0; i < schemas.length; i++){
            schemas[i].parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
        }
      next();
    } catch (err) {
        console.error(err)
        throw new HttpError(err.errors, HTTP_CODES.BAD_REQUEST)
    }
  };