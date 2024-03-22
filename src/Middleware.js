const express = require("express");
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log("Middleware is running!");
  next(); // Call the next middleware or route handler
};

// Using middleware in Express
app.use(myMiddleware);

// Route handling
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Starting the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
