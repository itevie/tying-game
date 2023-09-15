const express = require("express");
const fs = require("fs");

const app = express();
app.use("", express.static(__dirname));

app.get("/", (req, res) => {
    return res.status(200).send(" " + fs.readFileSync("./typing game.html", "utf-8"));
})

app.listen(2000);