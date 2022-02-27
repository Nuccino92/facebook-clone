import express from "express";
import passport from "passport";
import { getMessages_Get, sendMessage_Post } from "../controllers/messages.js";

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.post("/", auth, sendMessage_Post);
router.get("/:id", auth, getMessages_Get);

export default router;
