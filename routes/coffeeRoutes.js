const mongoose = require("mongoose");

const Origin = mongoose.model("origins");

module.exports = app => {
  app.get("/api/origins/", async (req, res) => {
    const origins = await Origin.find({ current: true }).sort({ order: 1 });

    res.send(origins);
  });
};
