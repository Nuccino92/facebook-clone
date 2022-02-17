import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";

import "./config/passport.js";

import registerRoutes from "./routes/register.js";
import logInRoutes from "./routes/log-in.js";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import commentsRoutes from "./routes/comments.js";

const app = express();

dotenv.config();
const dbURI = process.env.MONGOOSE_URI;

app.use(passport.initialize());
app.use("/uploads", express.static("uploads"));
//handles body requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(8000, () => console.log("Server is running on port 8000"))
  )
  .catch((err) => console.log(err.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use("/register", registerRoutes);
app.use("/log-in", logInRoutes);
app.use("/auth", authRoutes);
app.use("/posts", postsRoutes);
app.use("/user", userRoutes);
app.use("/comment", commentsRoutes);
