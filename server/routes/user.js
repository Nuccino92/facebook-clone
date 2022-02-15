import express from "express";
import { user_Get } from "../controllers/user.js";

const router = express.Router();

router.get("/:id", user_Get);

export default router;
