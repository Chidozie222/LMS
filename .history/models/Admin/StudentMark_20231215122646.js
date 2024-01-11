const mongoose = require('mongoose')

const StudentMark = new mongoose.Schema(
    {
        Class: String,
        Examination: String,
        Subject: String,
        Student: {
            RollNumber: Number,
            StudentFirstName: String,
            StudentLastName: String,
            Grade: String,
            Remarks: String
        },
        SchoolEmail: String
    },
    {
        collection: 'Student'
    }
)

mongoose.module("StudentMark", StudentMark)