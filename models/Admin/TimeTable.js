const mongoose = require('mongoose')


const TimeTable = new mongoose.Schema(
    {
        StartTime: String,
        EndTime: String,
        Subject: String,
        Teacher: String,
        Day: String,
        Class: String,
        SchoolEmail: String
    },
    {
        collection: 'TimeTable'
    }
)

mongoose.model('TimeTable', TimeTable)