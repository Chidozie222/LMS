// This page handles the routes for Attendance

// Attendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateAttendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the Attendance information backend
const Attendances = mongoose.model('Attendance')



UpdateAttendance.post('/UpdateAttendance', async (req, res) => {
    const { Class, Date, Absent, Reason, SchoolEmail } = req.body 
    
    try {
            await Attendances.Update(
                { SchoolEmail, Class, Date },
                {
                    $set:
                    {
                        Absent, 
                        Reason
                    }
                }
            )
            res.send({ status: 'ok', message: 'Attendance taken' })
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})


module.exports = UpdateAttendance
