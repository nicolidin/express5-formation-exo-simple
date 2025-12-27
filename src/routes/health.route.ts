// src/routes/health.routes.ts
import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/health", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1
    ? "connected"
    : "disconnected";
  res.json({ status: "ok", db: dbStatus });
});

export default router;
