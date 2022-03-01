import express from "express";
import passport from "passport";
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
  updateUser_Put,
  getFriendsInfo_Post,
} from "../controllers/user.js";

const router = express.Router();

import multer from "multer";

const auth = passport.authenticate("jwt", { session: false });

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
  { name: "profilePicture", maxCount: 1 },
  { name: "coverPhoto", maxCount: 1 },
]);

router.get("/:id", user_Get);
router.get("/", getAllUsers_Get);
router.post("/timeline/:id", auth, userTimeline_Get);
router.post("/friends/:id", auth, userFriends_Post);
router.post("/liked/:id", auth, userAddLikedPosts_Post);
router.post("/send-friend-request/:id", auth, userSendFriendRequest_Post);
router.post("/reject-friend-request/:id", auth, rejectFriendRequest_Post);
router.post("/accept-friend-request/:id", auth, acceptFriendRequest_Post);
router.post("/remove-friend/:id", auth, removeFriend_Post);
router.put("/update/:id", auth, multipleUpload, updateUser_Put);

router.post("/friends-info/:id", auth, getFriendsInfo_Post);

export default router;
