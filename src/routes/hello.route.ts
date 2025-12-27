// src/routes/hello.route.ts
import { Router } from "express";
import { sayHello } from "../controllers/hello.controller";
import {validateName} from "../middlewares/validateName.middleware";

const router = Router();
router.get("/hello/:name", validateName, sayHello);
export default router;
