import express from "express";
import passport from "passport";
import {
  addCommentReply_Post,
  addComment_Post,
  comment_Get,
} from "../controllers/comments.js";

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  addComment_Post
);
router.post(
  "/reply",
  passport.authenticate("jwt", { session: false }),
  addCommentReply_Post
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  comment_Get
);

export default router;
