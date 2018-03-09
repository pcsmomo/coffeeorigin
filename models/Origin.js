const mongoose = require("mongoose");
const { Schema } = mongoose;

const originSchema = new Schema({
  oid: String,
  ccode: String,
  oname: String,
  use: String,
  flavorNotes: String,
  description: String,
  origin: String,
  province: String,
  region: String,
  farm: String,
  washingStation: String,
  washingStationAltitude: String,
  variety: String,
  altitude: String,
  process: String,
  producer: String,
  farmers: String,
  owner: String,
  roastingMonth: String,
  roastery: String,
  order: Number
});

mongoose.model("origins", originSchema);
