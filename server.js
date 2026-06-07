const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Version 1");
  res.send("cicd working");
  res.send("version 2.1 deployed");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});