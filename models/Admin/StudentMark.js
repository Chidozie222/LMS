const mongoose = require('mongoose')

const StudentMark = new mongoose.Schema(
    {
        Class: String,
        Examination: String,
        Subject: String,
        Grade: Array,
        Remark: String,
        SchoolEmail: String
    },
    {
        collection: 'StudentMark'
    }
)

mongoose.model("StudentMark", StudentMark)
