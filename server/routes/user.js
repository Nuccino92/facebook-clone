import express from "express";
import { user_Get, userFriends_Post } from "../controllers/user.js";

const router = express.Router();

router.get("/:id", user_Get);
router.post("/friends/:id", userFriends_Post);

export default router;
