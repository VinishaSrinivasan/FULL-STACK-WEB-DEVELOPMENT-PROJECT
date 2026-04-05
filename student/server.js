const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// -----------------------------
// Simulated Database
// -----------------------------
let students = [];

// Fake async delay (simulate DB)
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// -----------------------------
// ADD STUDENT ROUTE
// -----------------------------
app.post("/studentsdb", async (req, res) => {

    await delay(1000); // simulate async DB operation

    const { name, department } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        department
    };

    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
});

// -----------------------------
// GET STUDENTS ROUTE
// -----------------------------
app.get("/studentsdb", async (req, res) => {

    await delay(1000); // simulate async DB operation

    res.json(students);
});

// -----------------------------
// SERVER
// -----------------------------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});