const mongoose = require('mongoose')


const Attendance = new mongoose.Schema(
    {
        Class: String,
        Date: Date,
        Student: {
            RollNumber: Number,
            StudentFisr
        }
    }
)