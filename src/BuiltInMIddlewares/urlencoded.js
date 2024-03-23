const express = require("express");
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post("/api/users", (req, res) => {
  console.log(req.body); // Access parsed URL-encoded data
  res.send("User created successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
