const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: { type: String, required: true },
  estimate: { type: Number, required: false },
});

const Room = mongoose.Schema(
  {
    users: { type: Map, of: User },
  },
  { timestamps: true }
);

module.exports = {
  Room: mongoose.model("Room", Room),
  User: mongoose.model("User", User),
};
