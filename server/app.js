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
import messageRoutes from "./routes/messages.js";
import conversationRoutes from "./routes/conversations.js";

import { Server } from "socket.io";

export const app = express();

dotenv.config();
const dbURI = process.env.MONGOOSE_URI;

app.use(passport.initialize());
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello :)");
});

const PORT = process.env.PORT || 8000;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server is running")))
  .then((server) => {
    const io = new Server(server, {
      cors: {
        origin: "https://facebook-mock-project.netlify.app/",
      },
    });

    let users = [];

    const addUser = (userId, socketId) => {
      !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
    };

    const getUser = (userId) => {
      return users.find((user) => user.userId === userId);
    };

    const removeUser = (socketId) => {
      users = users.filter((user) => user.socketId !== socketId);
    };

    io.on("connection", (socket) => {
      socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
      });

      socket.on("sendMessage", ({ senderId, receiverId, content }) => {
        const user = getUser(receiverId);
        if (user !== undefined) {
          io.to(user.socketId).emit("getMessage", {
            senderId,
            content,
          });
        }
      });

      socket.on("logOut", () => {
        removeUser(socket.Id);
        io.emit("getUsers", users);
      });
    });
  })
  .catch((err) => console.log(err.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use("/register", registerRoutes);
app.use("/log-in", logInRoutes);
app.use("/auth", authRoutes);
app.use("/posts", postsRoutes);
app.use("/user", userRoutes);
app.use("/comment", commentsRoutes);
app.use("/message", messageRoutes);
app.use("/conversation", conversationRoutes);
