const mongoose = require('mongoose')


const TeacherAttendance = new mongoose.Schema(
    {
        Date: Date,
        Tea: {
            RollNumber: Number,
            TeaFirstName: String,
            TeaLastName: String,
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