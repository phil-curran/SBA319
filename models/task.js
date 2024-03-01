const mongoose = require("mongoose");
const User = require("./user.js");

const commentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
});

const taskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  urgency: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  comments: [commentSchema], // Array of comment objects
});

taskSchema.index({ userId: 1 });
taskSchema.index({ urgency: 1 });
taskSchema.index({ dateAdded: 1 });
taskSchema.index({ completed: 1 });

// create model
const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
