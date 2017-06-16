// Main starting point of the application server
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const exporter = require("highcharts-export-server");

// create an instance of express
const app = express();

// :: DB Setup ::
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:auth/Allocator");
// :: App Setup ::
// express middleware
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
// :: Server Setup ::
// define server port
// create a http-Server - forward any input to the express application

app.get("/", function(req, res) {
  res.send("Welcome");
});

app.get("/history", function(req, res, next) {
  exporter.initPool();
  const img = exporter.export(req.query, function(err, exp) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (exp.data).
    //If the output is a PDF or SVG, it will contain a filename (exp.filename).
    //Kill the pool when we're done with it, and exit the application
    res.json({ img: exp.data });
    exporter.killPool();
  });
});

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(" --------------------------------------");
console.log(`    Local: http://localhost:${port}`);
console.log(" --------------------------------------");
