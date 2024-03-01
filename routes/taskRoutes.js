const express = require("express");
const Task = require("../models/task.js");
const User = require("../models/user.js");
const router = express.Router();

// ROUTES
// get all users
router.get("/", async (req, res) => {
  try {
    await Task.find().then((result) => {
      res.send(result);
    }, console.log("All tasks retrieved!"));
  } catch (err) {
    console.error("Error retrieving tasks: ", err.message);
    res.status(500).send("Error retrieving tasks.");
  }
});

// get specific user
router.get("/:id", async (req, res) => {
  try {
    await Task.findById(req.params.id).then((result) => {
      res.send(result);
    }, console.log("Single task retrieved!"));
  } catch (err) {
    console.error("Error retrieving task: ", err.message);
    res.status(500).send("Error retrieving task.");
  }
});

// add user
router.post("/add-task", async (req, res) => {
  try {
    const task = new Task({ ...req.body });
    await task.save();
    res.send("New task created");
  } catch (err) {
    console.error("Error creating new task: ", err.message);
    res.status(500).send("Error creating new task");
  }
});

// delete user
router.delete("/delete-task/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id).then((result) => {
      res.send(result);
    }, console.log("Task deleted!"));
  } catch (err) {
    console.error("Error deleting task: ", err.message);
    res.status(500).send("Error deleting task.");
  }
});

// edit user
router.patch("/update-user/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    ).then((result) => {
      res.send(result);
    }, console.log("User info updated!"));
  } catch (err) {
    console.error("Error updating user info:", err.message);
    res.status(500).send("Error updating user");
  }
});

module.exports = router;
