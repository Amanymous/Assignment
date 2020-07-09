const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  bottle: {
    type: String,
    required: true,
  },
  Eleven_bottles: {
    type: String,
    required: true,
  },
  pack_24: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
