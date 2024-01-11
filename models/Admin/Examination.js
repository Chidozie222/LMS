const mongoose = require('mongoose')


const Examination = new mongoose.Schema(
    {
        Class: String,
        Examination: String,
        ExaminationStartDate: Date,
        ExaminationEndDate: Date,
        Subject: String,
        SchoolEmail: String,
    },
    {
        collection: "Examination"
    }
)

mongoose.model("Examination", Examination)