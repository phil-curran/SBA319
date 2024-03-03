// imports
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// routes
const userRoutes = require("./routes/userRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");

// initialize app
const app = express();

// configs
dotenv.config();

// set view engine
app.set("view engine", "ejs");

// use things
// utilities
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
// routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

// db
const db = process.env.MONGO_URI;
// connect
const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("connected to mongoose!"));
};
connect();

// port listener
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}...`);
});

// routes
// app.get("/all-tasks", (req, res) => {
//   res.render("all-tasks", { title: "All Tasks" });
// });

app.get("/task-by-user", (req, res) => {
  res.render("by-person", { title: "Task By User" });
});

app.get("/task-by-status", (req, res) => {
  res.render("by-status", { title: "Task By Status" });
});

app.get("/task-by-urgency", (req, res) => {
  res.render("by-urgency", { title: "Task By Urgency" });
});

app.get("/", (req, res) => {
  res.redirect("all-tasks");
});
