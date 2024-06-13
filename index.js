const express = require("express");

const app = express();

const http = require("http");

const { Server } = require("socket.io");

const cors = require("cors");
const scp = require("node-scp");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("socket: ", socket);
  console.log("socket:id ", socket?.id);

  socket.on("test", (data) => {
    console.log("data:msg ", data);
  });
  socket.emit("hello", { back: "back" });
});

server.listen(3001, () => {
  console.log("Server is runnig");
});
