// src/middlewares/validateName.middleware.ts
import { Request, Response, NextFunction } from "express";

export function validateName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const name = req.params.name;

  if (!name || name.length < 2) {
    const error = new Error("Name must be at least 2 characters");
    return next(error); // ✅ Passe l'erreur au errorHandler
  }

  next();
}
