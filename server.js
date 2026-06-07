const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("cicd working | version 2.2 deployed");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});