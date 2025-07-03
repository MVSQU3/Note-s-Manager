import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true,
    createdAt: "created",
    updatedAt: "updated"
   }
);
const Note = mongoose.model("Note", noteSchema);
export default Note;
