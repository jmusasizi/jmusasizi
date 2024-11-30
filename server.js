// dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

// importing routes
const passangerRoutes = require("./routes/passangerRoutes");
// instantiations
const app = express();
const port = 3002;

// configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

// set view engine to pug
app.set("view engine", "pug"); // specify the view engine
app.set("views", path.join(__dirname, "views")); // specify the view directory

// middleware
app.use(express.static(path.join(__dirname, "public"))); // specify a folder for static files
app.use(express.urlencoded({ extended: true })); // helps to parse data from forms
app.use(express.json()); // helps to capture data in json

// use imported routes
app.use("/", passangerRoutes);
app.get("*", (req, res) => {
  res.send("Error! This page does not exist");
});

//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`)); // string interporation