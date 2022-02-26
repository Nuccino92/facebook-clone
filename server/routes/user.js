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
  { name: "profilePicture", maxCount: 1 },
  { name: "coverPhoto", maxCount: 1 },
]);

router.get("/:id", user_Get);
router.get("/", getAllUsers_Get);
router.post(
  "/timeline/:id",
  passport.authenticate("jwt", { session: false }),
  userTimeline_Get
);
router.post(
  "/friends/:id",
  passport.authenticate("jwt", { session: false }),
  userFriends_Post
);
router.post(
  "/liked/:id",
  passport.authenticate("jwt", { session: false }),
  userAddLikedPosts_Post
);
router.post(
  "/send-friend-request/:id",
  passport.authenticate("jwt", { session: false }),
  userSendFriendRequest_Post
);
router.post(
  "/reject-friend-request/:id",
  passport.authenticate("jwt", { session: false }),
  rejectFriendRequest_Post
);
router.post(
  "/accept-friend-request/:id",
  passport.authenticate("jwt", { session: false }),
  acceptFriendRequest_Post
);
router.post(
  "/remove-friend/:id",
  passport.authenticate("jwt", { session: false }),
  removeFriend_Post
);
router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  multipleUpload,
  updateUser_Post
);

export default router;
