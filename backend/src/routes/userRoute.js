import express from "express";
import { signupUser,loginUser } from "../controllers/user_controller.js";

const router = express.Router();

router.post("/signupUser", signupUser);
router.post("/loginUser",loginUser);

export default router;