const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const countrySchema = new Schema({
  ccode: String,
  cname: String,
  latitude: Number,
  longitude: Number,
  scale: Number
});

mongoose.model("countries", countrySchema);
