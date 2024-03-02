const express = require("express");
const Task = require("../models/task.js");
const User = require("../models/user.js");
const router = express.Router();

// ROUTES
// get all tasks
router.get("/", async (req, res) => {
  try {
    await Task.find().then((result) => {
      console.log("All tasks retrieved!");
      res.render("tasks", { title: "Task Overview" });
    });
  } catch (err) {
    console.error("Error retrieving tasks: ", err.message);
    res.status(500).send("Error retrieving tasks.");
  }
});

// get 'add task' form
router.get("/add-task", async (req, res) => {
  res.render("add-task", { title: "Add Task" });
});

// add task
router.post("/add-task", async (req, res) => {
  try {
    const task = new Task({ ...req.body });
    await task.save();
    console.log("Task added");
    res.redirect("/");
  } catch (err) {
    console.error("Error creating new task: ", err.message);
    res.status(500).send("Error creating new task");
  }
});

// get comment form
router.get("/task-detail/:id/add-comment", async (req, res) => {
  res.render("tasks/add-comment", { title: "Add Comment" });
});

// add comment
router.post("/task-detail/:id/add-comment", async (req, res) => {
  try {
    const task = new Task({ ...req.body });
    await task.save();
    console.log("Task added");
    res.redirect("tasks/task-detail/:id");
  } catch (err) {
    console.error("Error adding comment: ", err.message);
    res.status(500).send("Error adding new comment");
  }
});

// get specific task
router.get("/task-detail/:id", async (req, res) => {
  try {
    await Task.findById(req.params.id).then((result) => {
      console.log("Task retrieved!");
      res.render("tasks/task-detail", { title: "Task Detail" });
    });
  } catch (err) {
    console.error("Error retrieving task: ", err.message);
    res.status(500).send("Error retrieving task.");
  }
});

// delete task
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

// edit task form
router.get("/update-task/:id", async (req, res) => {
  res.render("tasks/edit-task", { title: "Edit Task" });
});

// edit task
router.patch("/update-task/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    ).then((result) => {
      res.send(result);
    }, console.log("Task info updated!"));
  } catch (err) {
    console.error("Error updating task: ", err.message);
    res.status(500).send("Error updating task.");
  }
});

module.exports = router;
