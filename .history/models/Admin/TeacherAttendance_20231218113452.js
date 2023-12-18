const mongoose = require('mongoose')


const TeacherAttendance = new mongoose.Schema(
    {
        Date: Date,
        : {
            RollNumber: Number,
            FirstName: String,
            LastName: String,
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