// src/routes/user.route.ts
import { Router } from "express";
import { User } from "../models/user.model";
import { z } from "zod";

const router = Router();

const userSchema = z.object({
  email: z.email(),
  name: z.string().min(1),
});

router.post("/", async (req, res) => {
  const data = userSchema.parse(req.body);
  const user = await User.create(data);
  res.status(201).json(user);
});

export default router;
