import express from "express";
import passport from "passport";
import {
  posts_Post,
  getPosts_Post,
  updatePostLikes_Post,
} from "../controllers/posts.js";

const router = express.Router();

import multer from "multer";

const auth = passport.authenticate("jwt", { session: false });

// define storage for images
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

router.post("/", auth, upload.single("picture"), posts_Post);
router.post("/:id", auth, getPosts_Post);
router.post("/like/:id", auth, updatePostLikes_Post);

export default router;
