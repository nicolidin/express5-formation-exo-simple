// src/controllers/hello.controller.ts
import { Request, Response } from "express";

export function sayHello(req: Request, res: Response) {
  const name = req.params.name || "world";
  res.json({ hello: name });
}
