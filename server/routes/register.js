import express from "express";
import { register_Post } from "../controllers/register.js";

const router = express.Router();

router.post("/", register_Post);

export default router;
