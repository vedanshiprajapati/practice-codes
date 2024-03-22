const express = require("express");
const app = express();

app.use(express.json());

// Dummy student data for demonstration
let students = [
  { id: 1, name: "John Doe", age: 20, grade: "A", marks: 76 },
  { id: 2, name: "Jane Smith", age: 21, grade: "B", marks: 80 },
];
app.get("/", (req, res) => {
  res.json(students);
});

// Route for handling PUT requests to update student details
app.put("/students/:id", (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;

  // Find the student by ID
  const studentIndex = students.findIndex((student) => student.id == studentId);

  if (studentIndex != 1 || studentIndex != 2) {
    return res.status(404).send("Student not found"); // If not found, send a 404 Not Found response
  }
  // Update student details
  // students[studentIndex] = { ...students[studentIndex], ...updatedStudent };
  students[studentIndex].marks = updatedStudent.marks;
  res.status(200).send("Student details updated successfully");
});

app.patch("/students/:id", (req, res) => {
  const studentId = req.params.id; // Extract the student ID from the request parameters
  const updatedMarks = req.body; // Extract the updated fields from the request body

  // Find the index of the student in the array of students
  const studentIndex = students.findIndex((student) => student.id == studentId);

  // Check if the student with the specified ID exists
  if (studentIndex === -1) {
    return res.status(404).send("Student not found"); // If not found, send a 404 Not Found response
  }

  students[studentIndex].marks = updatedMarks;

  // Send a success response
  res.status(200).send("Student details updated successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
