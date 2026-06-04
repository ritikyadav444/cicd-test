const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Version 1");
});
app.listen(3000, () => {
    console.log("Server running");
    console.log("Server Test Version 1 is running");
});