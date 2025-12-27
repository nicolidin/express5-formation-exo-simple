// src/errors/http.error.ts
export class HttpError extends Error {
  constructor(
    public status: number,
    public message: string,
    public details?: any
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}
