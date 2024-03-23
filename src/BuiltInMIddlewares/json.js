const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post("/api/users", (req, res) => {
  console.log(req.body); // Access parsed JSON data
  res.send("User created successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
