// This page handles the routes for Attendance

// Attendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentGetAttendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the Attendance information backend
const Attendances = mongoose.model('Attendance')


// Get Student Attendance
StudentGetAttendance.get('/StudentGetAttendance/:SchoolEmail/:Class/:Date/:StudentFirstName', async (req, res) => {
    const { SchoolEmail, Class, Date, StudentFirstName } = req.params

    let UserByClassByDate = await Attendances.find({ SchoolEmail, Class, Date, StudentFirstName  })

    try {
        if (UserByClassByDate.length > 0) {
            res.send({ status: 'ok', data: UserByClassByDate })
        } else {
            res.send({ status: 'pending', message: 'No Attendance found' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})


module.exports = StudentGetAttendance