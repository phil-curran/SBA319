// imports
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// routes
const userRoutes = require("./routes/userRoutes.js");

// initialize app
const app = express();

// configs
dotenv.config();

// set view engine
app.set("view engine", "ejs");

// use things
// utilities
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
// routes
app.use("/users", userRoutes);

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
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});
