// imports
const express = require("express");
require("dotenv").config();

// initialize app
const app = express();

// port listener
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}...`);
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});
