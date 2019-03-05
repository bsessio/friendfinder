// Your htmlRoutes.js file should include two routes:
var path = require("path");
var express = require("express");
var app = express();
var favicon = require("express-favicon")
app.use(favicon(__dirname + '../public/favicon.png'));
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/main.css", function(req, res) {
      res.sendFile(path.join(__dirname, "../../main.css"));
    });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  module.exports = app;