const mongoose = require('mongoose')


const Class = new mongoose.Schema(
    {
        ClassName: String,
        ClassNumber: Number,
        ClassCapacity: Number,
        ClassTeacher: String,
        ClassStartingOn: Date,
        ClassingEndingOn: Date,
        ClassLocatin: String,
        ClassFeeType: {type: String, default: 'Free'}
    },
    {
        collection: 'Class'
    }
)

mongoose.model("Class")