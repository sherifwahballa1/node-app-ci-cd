const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running okay");
});

module.exports = app;
