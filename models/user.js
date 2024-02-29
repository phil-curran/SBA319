const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

userSchema.index({ id: 1 });
userSchema.index({ name: 1 });
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

// create model
const User = mongoose.model("User", userSchema);
module.exports = User;
