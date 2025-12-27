// src/routes/ping.routes.ts
import { Router } from "express";
const router = Router();

router.get("/ping", (req, res) => {
  console.log("ping")
  res.json({ ok: true });
});

export default router;
