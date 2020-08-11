"use strict";

const express = require("express");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'pug')
fccTesting(app); //For FCC testing purposes
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route("/").get((req, res) => {
  //Change the response to render the Pug template
  res.render(`./pug/index.pug`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + port);
});
