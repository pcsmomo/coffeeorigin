const mongoose = require("mongoose");

const Origin = mongoose.model("origins");
const Country = mongoose.model("countries");

module.exports = app => {
  app.get("/api/origins/", async (req, res) => {
    const origins = await Origin.find({ current: true }).sort({ order: 1 });

    res.send(origins);
  });

  app.get("/api/countries/", async (req, res) => {
    const countries = await Country.find({});

    res.send(countries);
  });
};
