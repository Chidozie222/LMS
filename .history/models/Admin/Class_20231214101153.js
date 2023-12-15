const mongoose = require('mongoose')


const Class = new mongoose.Schema(
    {
        ClassName: String,
        ClassNumber: Number,
        ClassCapacity: Number,
        ClassTeacher: String,
        ClassStartingOn: Date,
        ClassEndingOn: Date,
        ClassLocatin: String,
        ClassFeeType: { type: String, default: 'Free' }
        SchoolE
    },
    {
        collection: 'Class'
    }
)

mongoose.model("Class", Class)