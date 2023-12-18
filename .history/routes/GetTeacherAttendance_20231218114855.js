// This page handles the routes for Teacher Attendance

// Teacher TeacherAttendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetTeacherAttendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the TeacherAttendance information backend
const TeacherAttendances = mongoose.model('TeacherAttendance')


// Get Student Attendance
GetAttendance.get('/GetAttendance/:SchoolEmail/:Class/:Date', async (req, res) => {
    const { SchoolEmail, Class, Date } = req.params

    let UserByClassByDate = await Attendances.find({ SchoolEmail, Class, Date })

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


