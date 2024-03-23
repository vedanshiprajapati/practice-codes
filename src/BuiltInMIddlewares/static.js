const express = require("express");
const app = express();

// Middleware to serve static files from the 'styles' directory
app.use("/styles", express.static("styles"));

// Middleware to serve static files from the 'scripts' directory
app.use("/scripts", express.static("scripts"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>hello </title>
        <link rel="stylesheet" href="/styles/main.css">
        <script src="/scripts/app.js"></script>
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
