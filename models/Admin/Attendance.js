const mongoose = require('mongoose')


const Attendance = new mongoose.Schema(
    {
        Class: String,
        Date: Date,
        Attendance: Object,
        SchoolEmail: String
    },
    {
        collection: "Attendance"
    }
)

mongoose.model("Attendance", Attendance)
