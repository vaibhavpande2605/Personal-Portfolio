const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  type: { type: String, required: true },
  level: { type: Number, required: true },
});

module.exports = mongoose.model("skills", skillsSchema);
