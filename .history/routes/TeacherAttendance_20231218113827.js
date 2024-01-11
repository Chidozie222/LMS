// This page handles the routes for Teacher Attendance

// Teacher TeacherAttendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const TeacherAttendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the TeacherAttendance information backend
const TeacherAttendances = mongoose.model('TeacherAttendance')



TeacherAttendance.post('/Attendance', async (req, res) => {
    const { Class, Date, RollNumber, TeacherFirstName, TeacherLastName, Absent, Reason, SchoolEmail } = req.body 

    let UserByClassAndDate = await TeacherAttendances.find({ SchoolEmail, Class, Date })
    
    try {
        if (UserByClassAndDate.length > 0) {
            res.send({ status: 'error', message: 'attendances has already been taken' })
        } else {
            await TeacherAttendances.insertMany([{
                Class,
                Date,
                student: {
                    RollNumber,
                    TeacherFirstName,
                    TeacherLastName,
                    Absent,
                    Reason
                },
                SchoolEmail
            }])
            res.send({ status: 'ok', message: 'Attendance taken' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})


module.exports = TeacherAttendance