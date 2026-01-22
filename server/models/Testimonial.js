const mongoose = require("mongoose");
const TestimonialSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  designation: String,
});
module.exports = mongoose.model("Testimonial", TestimonialSchema);
