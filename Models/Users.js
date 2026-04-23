const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    unique: true,
  },
  password: {
    type: String,
    required: "Please enter a password",
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model("User", userSchema);
