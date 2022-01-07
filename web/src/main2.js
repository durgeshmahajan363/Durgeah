const express = require("express");
const app = express();
app.use(express.json());

//http://localhost:5000/users
app.get("/users", (req, res) => {
  console.log(req.query);
  res.json({ message: "I am trying to get All users" });
});

//http://localhost:5000/add-user
app.post("/add-user", (req, res) => {
  console.log(req.body);
  res.json({ message: "dgss" });
});

app.listen(5000, () => console.log("server started"));
