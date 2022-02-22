import express from "express";
import {
  user_Get,
  userFriends_Post,
  userTimeline_Get,
  userAddLikedPosts_Post,
  getAllUsers_Get,
} from "../controllers/user.js";

const router = express.Router();

router.get("/:id", user_Get);
router.get("/", getAllUsers_Get);
router.post("/timeline/:id", userTimeline_Get);
router.post("/friends/:id", userFriends_Post);
router.post("/liked/:id", userAddLikedPosts_Post);

export default router;
