const express = require("express");
const User = require("../models/user.js");
const router = express.Router();

// ROUTES
// get all users
router.get("/", (req, res) => {
  res.json({ msg: "GET all users @ / routes / userRoutes.js" });
});

// get specific user
router.get("/:id", (req, res) => {
  res.json({
    msg: `GET a single user (id: ${req.params.id}) @ routes / userRoutes.js`,
  });
});

// add user
router.post("/", (req, res) => {
  res.json(req.body);
});

router.post("/add-user", async (req, res) => {
  try {
    // create new blog
    console.log("req.body: ", req.body);
    const user = new User({ ...req.body });
    // save is mongoose method for saving in a collection
    await user.save();
    // res.send displays to browser
    res.send("new user created");
    //or
    // this displays response object
    // res.send(result);
  } catch (err) {
    console.error("Error creating new user:", err.message);
    res.status(500).send("Error creating new user");
  }
});

// delete user
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a user @ routes / userRoutes.js" });
});

// edit user
router.patch("/:id", (req, res) => {
  res.json({ msg: "Edit a user @ routes / userRoutes.js" });
});

module.exports = router;
