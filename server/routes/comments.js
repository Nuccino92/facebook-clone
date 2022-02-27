import express from "express";
import passport from "passport";
import {
  addCommentReply_Post,
  addComment_Post,
  comment_Get,
} from "../controllers/comments.js";

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.post("/", auth, addComment_Post);
router.post("/reply", auth, addCommentReply_Post);
router.get("/:id", auth, comment_Get);

export default router;
