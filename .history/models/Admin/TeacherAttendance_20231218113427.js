const mongoose = require('mongoose')


const TeacherAttendance = new mongoose.Schema(
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
        collection: "TeacherAttendance"
    }
)

mongoose.model("TeacherAttendance", TeacherAttendance)