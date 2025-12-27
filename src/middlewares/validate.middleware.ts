// src/middlewares/validate.middleware.ts
import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body); // lance ZodError
      next();
    } catch (err) {
      return next(err); // laissé au errorHandler global
    }
  };
