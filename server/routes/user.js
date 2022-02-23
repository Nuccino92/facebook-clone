import express from "express";
import {
  user_Get,
  userFriends_Post,
  userTimeline_Get,
  userAddLikedPosts_Post,
  getAllUsers_Get,
  userSendFriendRequest_Post,
  rejectFriendRequest_Post,
  acceptFriendRequest_Post,
} from "../controllers/user.js";

const router = express.Router();

router.get("/:id", user_Get);
router.get("/", getAllUsers_Get);
router.post("/timeline/:id", userTimeline_Get);
router.post("/friends/:id", userFriends_Post);
router.post("/liked/:id", userAddLikedPosts_Post);
router.post("/send-friend-request/:id", userSendFriendRequest_Post);
router.post("/reject-friend-request/:id", rejectFriendRequest_Post);
router.post("/accept-friend-request/:id", acceptFriendRequest_Post);

export default router;
