import express from "express";
import { signupUser,loginUser } from "../controllers/user.js";

const router = express.Router();

router.post("/signupUser", signupUser);
router.post("/loginUser",loginUser);

export default router;