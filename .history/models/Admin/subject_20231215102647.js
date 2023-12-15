const mongoose = require('mongoose')


const Subject = new mongoose.Schema(
    {
        Class: String,
        SubjectName: String,
        SubjectCode: String,
        SubjectTeacher: String,
        BookName: String,
        SchoolEmail: String
    },
    {
        collection: "Subject"
    }
)

mongoose.model("Subject", Subject)