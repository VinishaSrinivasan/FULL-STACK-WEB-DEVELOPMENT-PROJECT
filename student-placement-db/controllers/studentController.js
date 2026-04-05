const Student = require("../models/Student");

/* =========================
   ADD STUDENT
========================= */
exports.addStudent = async (req, res) => {
    try {

        const {
            name,
            department,
            company,
            packageText,
            packageValue
        } = req.body;

        const student = new Student({
            name,
            department,
            company,
            packageText,
            packageValue
        });

        await student.save();

        res.status(201).json(student);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* =========================
   GET ALL STUDENTS
========================= */
exports.getStudents = async (req, res) => {
    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* =========================
   DELETE STUDENT
========================= */
exports.deleteStudent = async (req, res) => {
    try {

        const id = req.params.id;

        await Student.findByIdAndDelete(id);

        res.json({ message: "Student Deleted Successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};