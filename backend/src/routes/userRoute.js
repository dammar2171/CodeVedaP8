import express from "express";
import { signupUser } from "../controllers/user.js";

const router = express.Router();

router("/signupUser", signupUser);

export default router;