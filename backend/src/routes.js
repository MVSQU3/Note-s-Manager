import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "./controller/Note.controller.js";
import { limiter } from "./middleware/limit.js";
import { getAllUsers, register } from "./controller/User.controller.js";
const router = express.Router();

router.get("/api/note/", limiter, getAllNotes);
router.get("/api/note/:id", getNoteById);
router.post("/api/note/", createNote);
router.put("/api/note/:id", updateNote);
router.delete("/api/note/:id", deleteNote);

router.post("/api/register", register);
router.get("/api/user", getAllUsers);
export default router;
