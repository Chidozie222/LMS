const mongoose = require('mongoose')


const Class = new mongoose.Schema(
    {
        Class: String,
        ClassNumber: Number,
        ClassCapacity: Number,
        ClassTeacher: String,
        ClassStartingOn: Date,
        ClassEndingOn: Date,
        ClassLocatin: String,
        ClassFeeType: { type: String, default: 'Free' },
        SchoolEmail: String
    },
    {
        collection: 'Class'
    }
)

mongoose.model("Class", Class)