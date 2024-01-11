const mongoose = require('mongoose')


const TeacherAttendance = new mongoose.Schema(
    {
        Date: Date,
        Teacher: {
            RollNumber: Number,
            TeacherFirstName: String,
            TeacherLastName: String,
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