const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    company: String,
    package: String
});

module.exports = mongoose.model("Student", studentSchema);