const express = require("express");
const app = express();

//http://localhost:4000/
app.get("/", (req, res) => {
  res.json({ title: "Helloeoo first api" });
});

//http://localhost:4000/1
app.get("/1", (req, res) => {
  res.json({ title: "Hello universe" });
});

app.post("/3", (req, res) => {
  res.json({ message: "33333" });
});

app.listen(4000, () => console.log("server started"));
