const express = require("express");
const app = express();
const usersRouter = require("./users");

// Middleware to use the usersRouter for '/users' route
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
