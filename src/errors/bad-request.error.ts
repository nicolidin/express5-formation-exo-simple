// src/errors/bad-request.error.ts
import { HttpError } from "./http.error";
export class BadRequestError extends HttpError {
  constructor(message = "Bad Request", details?: any) {
    super(400, message, details);
  }
}
