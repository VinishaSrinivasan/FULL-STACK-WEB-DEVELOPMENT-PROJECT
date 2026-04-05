const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

/* ADD STUDENT */
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

/* GET STUDENTS */
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

/* DELETE STUDENT */
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

module.exports = router;