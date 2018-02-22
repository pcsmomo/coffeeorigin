const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Country");

mongoose.connect(keys.mongoURI);

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT);
