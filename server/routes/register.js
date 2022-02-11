import express from "express";
import { register_Post } from "../controllers/register.js";
import registerValidation from "../validation/register.js";

const router = express.Router();

router.post("/", registerValidation, register_Post);

export default router;
