const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/placementDB")
.then(()=>console.log("MongoDB Connected"));

app.use("/students", require("./routes/studentRoutes"));

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});