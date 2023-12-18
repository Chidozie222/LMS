const mongoose = require('mongoose')


const TeacherAttendance = new mongoose.Schema(
    {
        Date: Date,
        T: {
            RollNumber: Number,
            TFirstName: String,
            TLastName: String,
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