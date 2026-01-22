const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: String, required: true },
    category: { type: String, default: "Gallery" }, // Video mein "GALLERY" likha hai
    link: { type: String },
    imageUrl: { type: String }, // Main thumbnail
    images: [{ type: String }], // Array for Slider (Video mein jo slider hai)
    likes: { type: Number, default: 0 }, // Video mein heart icon aur count hai
  },
  { timestamps: true },
);

module.exports = mongoose.model("Project", ProjectSchema);
