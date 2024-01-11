
// This page handles the routes for TimeTable

// TimeTable backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const TimeTable = Router()

// calling the schema 
require('../models/Admin/TimeTable')

// setting up the schema for the Notify information backend
const TimeTables = mongoose.model('TimeTable')


TimeTable.post('/TimeTable', async (req, res) => {
    const { StartTime, EndTime, Subject, Teacher, Day, Class, SchoolEmail } = req.body

    try {
        const UserByClass = await TimeTables.find({ SchoolEmail, Class })

        if (UserByClass.length > 0) {
            res.send({ status: 'error', message: 'User has already available' })
        } else {
            await TimeTables.create({
                StartTime, 
                EndTime, 
                Subject, 
                Teacher, 
                Day, 
                Class, 
                SchoolEmail
            })
            res.send({ status: 'ok', message: 'data has been uploaded' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = TimeTable