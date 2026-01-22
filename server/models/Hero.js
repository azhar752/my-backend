const mongoose = require("mongoose");
const HeroSchema = new mongoose.Schema({
  heading: String,
  subHeading: String,
});
module.exports = mongoose.model("Hero", HeroSchema);
