// This page handles the routes for Teacher Attendance

// Teacher TeacherAttendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetTeacherAttendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the TeacherAttendance information backend
const TeacherAttendances = mongoose.model('TeacherAttendance')


// Get Teacher Attendance
GetTeacherAttendance.get('/GetAttendance/:SchoolEmail/:Date', async (req, res) => {
    const { SchoolEmail, Date } = req.params

    let UserByDate = await TeacherAttendances.find({ SchoolEmail, Date })

    try {
        if (UserByDate.length > 0) {
            res.send({ status: 'ok', data: UserByDate })
        } else {
            res.send({ status: 'pending', message: 'No Attendance found' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})


module.exports = Get

