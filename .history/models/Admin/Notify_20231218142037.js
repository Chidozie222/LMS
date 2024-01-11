const mongoose = require('mongoose')


const Notify = new mongoose.Schema(
    {
        Name: String,
        Receiver: String,
        Description: String,
        SchoolEmail: String
    }
)