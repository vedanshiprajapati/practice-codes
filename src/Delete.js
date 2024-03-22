const express = require("express");
const app = express();

let students = [
  { id: 1, name: "Alice", courseId: 101 },
  { id: 2, name: "Bob", courseId: 102 },
  { id: 3, name: "Charlie", courseId: 101 },
];

let courses = [
  { id: 101, name: "Math" },
  { id: 102, name: "English" },
];

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter((student) => student.id !== id);
  res.json(students);
});

app.delete("/students", (req, res) => {
  const ids = req.query.ids.split(",").map((id) => parseInt(id));
  students = students.filter((student) => !ids.includes(student.id));
  res.send("Students deleted successfully");
});

app.delete("/course/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex === -1) {
    return res.status(404).send("Student not found");
  }

  students = students.filter((student) => student.id !== id);

  const courseId = students[studentIndex].courseId;

  courses = courses.filter((course) => course.id !== courseId);
  res.send("Student and related course deleted successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
