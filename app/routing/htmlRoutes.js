// Dependencies
var path = require("path");
var express = require("express");
var app = express();

// Default catch-all path sending you on home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// How to feed in our main.css file to all our pages.
app.get("/main.css", function(req, res) {
  res.sendFile(path.join(__dirname, "../../main.css"));
});

// Because links to images are hard.
app.get("/b99.jpg", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/b99.jpg"));
});
app.get("/b99logo.png", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/b99logo.png"));
});

// Loads up the Survey page.
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Gives us our pretty favicon, THANKS HEROKU.
app.get("/favicon.ico", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/favicon.ico"));
});

// Load it up! Send it out! RAWHIDE!
module.exports = app;
