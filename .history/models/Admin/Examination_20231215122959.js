const mongoose = require('mongoose')


const Examination = new mongoose.schema(
    {
        Class: String,
        Examination: String,
        ExaminationStartDate: Date,
        ExaminationEndDate: Date,
        Su
    }
)