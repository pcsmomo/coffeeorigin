const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  cid: String,
  origin: String, // country from
  region: String, // certain area in that country
  process: String,
  variety: String,
  altitude: String,
  flavorNotes: String,
  description: String,
  use: String, // filter or espresso
  roastingMonth: String
});

mongoose.model("coffees", coffeeSchema);
