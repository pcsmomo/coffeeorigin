const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const countrySchema = new Schema({
  cid: String,
  name: String,
  region: String
});

mongoose.model("countries", countrySchema);
