// This page handles the routes for Attendance

// Attendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetAttendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the Attendance information backend
const Attendances = mongoose.model('Attendance')


// Get Student Attendance
GetAttendance.get('/GetAttendance/:SchoolEmail/:Class/:Date', async (req, res) => {
    const { SchoolEmail, Class, Date } = req.params

    let UserByClassByDate = await Attendances.find({ SchoolEmail, Class, Date })

    try {
        if (UserByClassByDate.length > 0) {
            res.send({ status: 'ok', data: UserByClassByDate })
        } else {
            res.send({ status: 'pending', message: 'No ' })
        }
    } catch (error) {
        
    }
})