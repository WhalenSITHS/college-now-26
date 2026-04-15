const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a name",
  },
  email: {
    type: String,
    trim: true,
    required: "Please enter an email",
  },
});

module.exports = mongoose.model("User", userSchema);
