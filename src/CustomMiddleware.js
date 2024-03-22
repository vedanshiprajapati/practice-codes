const express = require("express");
const app = express();

function loggingMiddleware(req, res, next) {
  // Check if the 'token' query parameter exists in the request
  if (req.query.token) {
    // If the parameter exists, log a message
    console.log(`Token '${req.query.token}' found in request`);
  } else {
    // If the parameter doesn't exist, log a different message
    console.log("No token found in request");
  }
  // Proceed to the next middleware in the stack
  next();
}

// Real world example
function authenticationMiddleware(req, res, next) {
  // Check if user is authenticated
  const authToken = req.headers.authorization;

  // If no authentication token is present, send a 401 Unauthorised response
  if (!authToken) {
    return res.status(401).send("Unauthorized: Authentication token missing");
  }

  // In a real-world scenario, here you would validate the authentication token
  console.log("User is authenticated");

  next();
}

app.get("/", loggingMiddleware, (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
