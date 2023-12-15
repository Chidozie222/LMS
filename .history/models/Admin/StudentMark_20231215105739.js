const mongoose = require('mongoose')

const StudentMark = new mongoose.schema(
    {
        Class: String,
        Examination: String,
        Subject: String,
        Student: {f3 4]- 
            RollNumber: Number,
            StudentFirstName: String,
            StudentLastName: String,
            Grade: String,
            Remarks: String
        },
        SchoolEmail: String
    }
)