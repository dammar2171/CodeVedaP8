import express from "express";
import { insertNotes ,fetchNotes, deleteNote, updateNote} from "../controllers/notes_controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/insertNotes",authMiddleware,insertNotes);
router.get("/getNotes",authMiddleware,fetchNotes);
router.delete("/deleteNote/:title",authMiddleware,deleteNote);
router.put("/updateNote/:title",authMiddleware,updateNote);

export default router;