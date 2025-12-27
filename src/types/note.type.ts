// src/types/note.types.ts
import { NoteData } from "../models/note.model";

export type CreateNoteInput = Omit<NoteData, "userId">;

export type NoteResponse = Omit<NoteData, "userId"> & {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
