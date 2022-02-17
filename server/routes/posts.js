import express from "express";
import { posts_Post, getPosts_Post } from "../controllers/posts.js";

const router = express.Router();

import multer from "multer";

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

router.post("/", upload.single("picture"), posts_Post);
router.post("/:id", getPosts_Post);

export default router;
