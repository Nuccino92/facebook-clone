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
  removeFriend_Post,
  updateUser_Post,
} from "../controllers/user.js";

const router = express.Router();

import multer from "multer";

const filesStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: filesStorageEngine,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

let multipleUpload = upload.fields([
  { name: "profilePicture" },
  { name: "coverPhoto" },
]);

router.get("/:id", user_Get);
router.get("/", getAllUsers_Get);
router.post("/timeline/:id", userTimeline_Get);
router.post("/friends/:id", userFriends_Post);
router.post("/liked/:id", userAddLikedPosts_Post);
router.post("/send-friend-request/:id", userSendFriendRequest_Post);
router.post("/reject-friend-request/:id", rejectFriendRequest_Post);
router.post("/accept-friend-request/:id", acceptFriendRequest_Post);
router.post("/remove-friend/:id", removeFriend_Post);
router.put("/update/:id", multipleUpload, updateUser_Post);

export default router;
