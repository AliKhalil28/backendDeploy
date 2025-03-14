require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/first", (req, res) => {
  res.send("This is my first app backend app");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login first</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
