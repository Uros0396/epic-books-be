const express = require("express");

require("dotenv").config();
const init = require("./db");
const usersRoute = require("./routes/users");
const PORT = 3061;

const server = express();

server.use(express.json());
server.use("/", usersRoute);
init();

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
