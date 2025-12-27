// src/middlewares/requireUserToken.middleware.ts
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { User } from "../models/user.model";
import {BadRequestError} from "../errors/bad-request.error";

export async function requireUserToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. Extraire le userId du header
  const userId = req.header("x-user-id");
  if (!userId) {
    throw new BadRequestError("Missing x-user-id header");
  }

  // 2. Valider le format ObjectId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new BadRequestError("Invalid userId format");
  }

  // 3. ✅ Vérifier que l'utilisateur existe dans la DB
  const user = await User.findById(userId);
  if (!user) {
    throw new BadRequestError("User not found");
  }

  // 4. Injecter dans req pour utilisation dans les controllers
  req.userId = userId;

  next();
}
