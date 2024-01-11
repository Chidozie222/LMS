const mongoose = require('mongoose')


const Event = mongoose.Schema(
    {
        StartDate: Date,
        StartTime: String,
        EndDate: Date,
        EndTime: String,
        Title: String,
        Description: String,
        ShowToAll: {type: Boolean, default: false},
        SchoolEmail: String
    },
    {
        co
    }
)