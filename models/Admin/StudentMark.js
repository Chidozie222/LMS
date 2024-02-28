const mongoose = require('mongoose')

const StudentMark = new mongoose.Schema(
    {
        Class: String,
        Examination: String,
        Subject: String,
        RollNumber: Number,
        StudentFirstName: String,
        StudentLastName: String,
        StudentID: String,
        Grade: String,
        Remarks: String,
        SchoolEmail: String
    },
    {
        collection: 'StudentMark'
    }
)

mongoose.model("StudentMark", StudentMark)
