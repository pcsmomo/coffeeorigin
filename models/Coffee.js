const mongoose = require("mongoose");
const { Schema } = mongoose;

const coffeeSchema = new Schema({
  cid: String,
  origin: String,
  region: String,
  process: String,
  variety: String,
  altitude: String,
  flavorNotes: String,
  description: String,
  use: String,
  roastingMonth: String,
  order: String
});

mongoose.model("coffees", coffeeSchema);
