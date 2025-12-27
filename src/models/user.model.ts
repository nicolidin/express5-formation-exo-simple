// src/models/user.model.ts
import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  email: string;
  name: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    name: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
