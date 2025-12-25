const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  text: { type: String, required: true },
  helpText: String,
  allowMultiple: { type: Boolean, default: false }
});

module.exports = mongoose.model("Question", questionSchema);
