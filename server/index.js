// Main starting point of the application server
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");

// create an instance of express
const app = express();

// :: DB Setup ::
mongoose.connect("mongodb://localhost:auth/auth");
// :: App Setup ::
// express middleware
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);
// :: Server Setup ::
// define server port
// create a http-Server - forward any input to the express application
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(" --------------------------------------");
console.log(`    Local: http://localhost:${port}`);
console.log(" --------------------------------------");
