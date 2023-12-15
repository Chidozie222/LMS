const mongoose = require('mongoose')


const Attendance = new mongoose.Schema(
    {
        Class: String,
        Date: Date,
        Student: {
            RollNumber: Number,
            StudentFirstName: String,
            StudentLastName: String,
            Absent: { type: Boolean, default: false },
            Rwa
        }
    }
)