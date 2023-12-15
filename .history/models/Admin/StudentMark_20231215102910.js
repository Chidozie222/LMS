const mongoose = require('mongoose')

const StudentMark = new mongoose.schema(
    {
        Class: String,
        Examination: String,
        
    }
)