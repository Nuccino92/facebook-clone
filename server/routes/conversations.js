import express from "express";
import passport from "passport";
import {
  startConversation_Post,
  findConversation_Get,
} from "../controllers/conversations.js";

const auth = passport.authenticate("jwt", { session: false });

const router = express.Router();

router.post("/", auth, startConversation_Post);
router.get("/find/:firstId/:secondId", auth, findConversation_Get);

export default router;
