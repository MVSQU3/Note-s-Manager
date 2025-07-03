import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "./controller/Note.controller.js";
const router = express.Router();

router.get("/api/note/", getAllNotes);
router.get("/api/note/:id", getNoteById);
router.post("/api/note/", createNote);
router.put("/api/note/:id", updateNote);
router.delete("/api/note/:id", deleteNote);
export default router;
