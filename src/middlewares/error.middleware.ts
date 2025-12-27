// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from "express";

// src/middlewares/error.middleware.ts
import { HttpError } from "../errors/http.error";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // 1) Erreur métier personnalisée
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      status: "error",
      message: err.message,
      details: err.details ?? null,
    });
  }
  // 2) Gérer les autres erreurs
  if (err instanceof Error) {
    console.log("500")
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }

  // 3) Erreur inconnue
  console.error("Unhandled error:", err);
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}
