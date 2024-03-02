const express = require("express");
const User = require("../models/user.js");
const router = express.Router();

// ROUTES
// get all users
router.get("/", async (req, res) => {
  try {
    await User.find().then((result) => {
      res.send(result);
    }, console.log("All users retrieved!"));
  } catch (err) {
    console.error("Error retrieving users: ", err.message);
    res.status(500).send("Error retrieving users.");
  }
});

// get add user form
router.get("/add-user", async (req, res) => {
  res.render("users/add-user", { title: "Add user" });
});

// get edit user form
router.get("/edit-user", async (req, res) => {
  res.render("users/edit-user", { title: "Edit user" });
});

// get specific user
router.get("/:id", async (req, res) => {
  try {
    await User.findById(req.params.id).then((result) => {
      res.send(result);
    }, console.log("Single user retrieved!"));
  } catch (err) {
    console.error("Error retrieving user: ", err.message);
    res.status(500).send("Error retrieving user.");
  }
});

// add user
router.post("/add-user", async (req, res) => {
  try {
    const user = new User({ ...req.body });
    await user.save();
    res.send("new user created");
  } catch (err) {
    console.error("Error creating new user: ", err.message);
    res.status(500).send("Error creating new user");
  }
});

// delete user
router.delete("/delete-user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id).then((result) => {
      res.send(result);
    }, console.log("User deleted!"));
  } catch (err) {
    console.error("Error deleting user: ", err.message);
    res.status(500).send("Error deleting user.");
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
    console.error("Error updating user info: ", err.message);
    res.status(500).send("Error updating user");
  }
});

module.exports = router;
