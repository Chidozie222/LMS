const mongoose = require('mongoose')


const Event = mongoose.Schema(
    {
        StartDate: Date,
        StartTime: String,
        EndDate: Date,
        EndTime: String,
        Title: String,
        Description: String,
        ShowToAll: {},
        SchoolEmail: String
    }
)