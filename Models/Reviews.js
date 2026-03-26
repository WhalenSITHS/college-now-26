const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: String,
  content: String,
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
