// src/routes/note.route.ts
import { Router } from "express";
import { requireUserToken } from "../middlewares/requireUserToken.middleware";
import * as noteController from "../controllers/note.controller";
import {validate} from "../middlewares/validate.middleware";
import {createNoteSchema} from "../schemas/note.schema";

const router = Router();

// Protéger toutes les routes avec requireUserToken
router.use(requireUserToken);

router.get("/", noteController.getAllByUserId);
router.get("/:id", noteController.getOne);
router.post("/", validate(createNoteSchema), noteController.create);

export default router;
