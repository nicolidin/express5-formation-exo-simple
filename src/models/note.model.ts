// src/models/note.model.ts
import mongoose from "mongoose";
import type {NoteResponse} from "../types/note.type";

export type NoteData = {
  contentMd: string;
  userId: mongoose.Types.ObjectId;
};

export interface INote extends mongoose.Document, NoteData {
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new mongoose.Schema<INote>(
  {
    contentMd: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  { timestamps: true }
);

NoteSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret): NoteResponse => {
    return {
      id: ret._id.toString(),
      contentMd: ret.contentMd,
      userId: ret.userId?.toString(),
      createdAt: ret.createdAt,
      updatedAt: ret.updatedAt,
    };
  }
});
export const Note = mongoose.model<INote>("Note", NoteSchema);
