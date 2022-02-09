import express from "express";
import { logIn_Post } from "../controllers/log-in.js";

const router = express.Router();

router.post("/", logIn_Post);

export default router;
