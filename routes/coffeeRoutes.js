const mongoose = require("mongoose");

const Coffee = mongoose.model("coffees");

module.exports = app => {
  app.get("/api/coffees/", async (req, res) => {
    const coffees = await Coffee.find({ current: "o" }).sort({ order: 1 });

    res.send(coffees);
  });
};
