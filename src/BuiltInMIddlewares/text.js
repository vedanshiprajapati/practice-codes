const express = require("express");
const app = express();

// Parse text request bodies
app.use(express.text());

// Route handler that uses req.body
app.post("/api/text", (req, res) => {
  const textData = req.body;
  // Process the text data...
  console.log(textData);
  res.json({ message: "Text data received successfully" });
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
