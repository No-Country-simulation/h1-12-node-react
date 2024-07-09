import { HTTP_CODES } from "./http-codes.util.js";

export class HttpError {
  constructor(message, status = HTTP_CODES.INTERNAL_SERVER_ERROR, error) {
    this.status = status;
    this.message = message;
    error && (this.details = error);
  }
}