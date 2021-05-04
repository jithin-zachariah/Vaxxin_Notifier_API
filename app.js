var express = require("express");
require("./database/connection");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

var regRouter = require("./routes/registration");

var app = express();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(regRouter);
app.use("*", (req, res) => {
  res.status(404).send("API not found");
});

module.exports = app;
