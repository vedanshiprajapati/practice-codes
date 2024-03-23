const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Applying body-parser middleware at the application level
app.use(bodyParser.json());

// Middleware for enabling CORS for specific route
const corsOptions = {
  origin: "https://www.youtube.com", // Allowed origin set to youtube.com
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Apply CORS middleware to specific route
app.get("/api/data", cors(corsOptions), (req, res) => {
  const data = req.query.data;
  // Your route logic here
  res.json(data);
});

// Example route without CORS
app.get("/public", (req, res) => {
  // Your route logic here
  res.send("Public route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
