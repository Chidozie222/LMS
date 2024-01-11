const mongoose = require('mongoose')


const TeAttendance = new mongoose.Schema(
    {
        Class: String,
        Date: Date,
        Student: {
            RollNumber: Number,
            StudentFirstName: String,
            StudentLastName: String,
            Absent: { type: Boolean, default: false },
            Reason: String,
        },
        SchoolEmail: String
    },
    {
        collection: "TeAttendance"
    }
)

mongoose.model("TeAttendance", TeAttendance)