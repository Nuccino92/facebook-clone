import express from "express";
import { addComment_Post, comment_Get } from "../controllers/comments.js";

const router = express.Router();

router.post("/", addComment_Post);
router.get("/:id", comment_Get);

export default router;
