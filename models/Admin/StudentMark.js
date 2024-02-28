const mongoose = require('mongoose')

const StudentMark = new mongoose.Schema(
    {
        Class: String,
        Examination: String,
        Subject: String,
        Grade: Array,
        Remark: Array,
        SchoolEmail: String
    },
    {
        collection: 'StudentMark'
    }
)

mongoose.model("StudentMark", StudentMark)
