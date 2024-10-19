const express = require("express");

require("dotenv").config();
const init = require("./db");
const usersRoute = require("./routes/users");
const cors = require("cors");
const blogsRoute = require("./routes/blogs");
const PORT = 3061;

const server = express();

server.use(
  cors({
    origin: "http://localhost:5173",
  })
);
server.use(express.json());
server.use("/", usersRoute);
server.use("/blogs", blogsRoute);

server.get("/risposta", (req, res) => {
  res.json({
    message: "tutto ok",
  });
});

init();

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
