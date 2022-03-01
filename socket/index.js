import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
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

httpServer.listen(5000);
