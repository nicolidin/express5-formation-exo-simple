// src/controllers/note.controller.ts
import { Request, Response } from "express";
import { Note } from "../models/note.model";
import {NotFoundError} from "../errors/not-found.error";
import {CreateNoteInput, NoteResponse} from "../types/note.type";
import {Expression} from "mongoose";

export async function getAllByUserId(req: Request, res: Response<Array<NoteResponse>>) {
  // req.userId est injecté par requireUserToken
  const notes = await Note.find({ userId: req.userId });
  res.json(notes as unknown as Array<NoteResponse>);
}

export async function getOne(req: Request<{id: string}, NoteResponse>, res: Response<NoteResponse>) {
  const id = req.params.id;
  const note = await Note.findById(id);
  if (!note) {
    throw new NotFoundError("Note not found");
  }
  res.json(note as unknown as NoteResponse);
}

export async function create(req: Request<unknown, NoteResponse, CreateNoteInput>, res: Response<NoteResponse>) {
  const note = await Note.create({
    contentMd: req.body.contentMd,
    userId: req.userId,  // Vient du middleware, pas du body
  });
  res.status(201).json(note as unknown as NoteResponse);
}
