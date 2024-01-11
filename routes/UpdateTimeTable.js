// This page handles the routes for TimeTable

// TimeTable information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateTimeTable = Router()

// calling the schema 
require('../models/Admin/TimeTable')

// setting up the schema for the TimeTable information backend
const TimeTables = mongoose.model('TimeTable')



UpdateTimeTable.post('/UpdateTimeTable', async (req, res) => {
    const { StartTime, EndTime, Subject, Teacher, Day, Class, SchoolEmail } = req.body 

    try {
            await TimeTables.Update(
                { SchoolEmail, Class, Day },
                {
                    $set: 
                    {
                        StartTime, 
                        EndTime, 
                        Subject, 
                        Teacher, 
                        Day, 
                        Class, 
                        SchoolEmail
                    }
                }
            )
            res.send({ status: 'ok', message: 'Updated successfully' })
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})


module.exports = UpdateTimeTable