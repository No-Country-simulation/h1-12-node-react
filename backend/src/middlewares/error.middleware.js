import { HTTP_CODES } from "../utils/http-codes.util.js";

const errorMiddleware = (error, req, res, next) => {
  console.error("ERROR => ", error);
  res.status(error.status || HTTP_CODES.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    response: error.message || "Internal Server Error",
  });
};

export default errorMiddleware;