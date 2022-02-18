import express from "express";
import {
  addCommentReply_Post,
  addComment_Post,
  comment_Get,
} from "../controllers/comments.js";

const router = express.Router();

router.post("/", addComment_Post);
router.post("/reply", addCommentReply_Post);
router.get("/:id", comment_Get);

export default router;
