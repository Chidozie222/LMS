const mongoose = require('mongoose')


const TeacherAttendanceS = new mongoose.Schema(
    {
        Date: Date,
        Teacher: {
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