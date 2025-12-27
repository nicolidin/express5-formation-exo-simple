// src/schemas/note.schema.ts
import { z } from "zod";

export const createNoteSchema = z.object({
  contentMd: z.string().min(1, "Le contenu ne peut pas être vide"),
});
