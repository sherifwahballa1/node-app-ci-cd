const express = require("express");
const pug = require("pug");
const path = require("path");
require("colors");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { name: "shenouda" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Thanks god" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running okay");
});

module.exports = app;
