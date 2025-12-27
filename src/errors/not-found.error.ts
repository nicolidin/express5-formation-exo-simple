// src/errors/not-found.error.ts
import { HttpError } from "./http.error";
export class NotFoundError extends HttpError {
  constructor(message = "Not Found", details?: any) {
    super(404, message, details);
  }
}
