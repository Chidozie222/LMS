// This page handles the routes for Teacher Attendance

// Teacher TeacherAttendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateTeacherAttendance = Router()

// calling the schema 
require('../models/Admin/TeacherAttendance')

// setting up the schema for the TeacherAttendance information backend
const TeacherAttendances = mongoose.model('TeacherAttendance')



UpdateTeacherAttendance.post('/UpdateTeacherAttendance', async (req, res) => {
    const { Date, Absent, Reason, SchoolEmail } = req.body 

    try {
            await TeacherAttendances.Update(
                { SchoolEmail, Date },
                {
                    $set: 
                    {
                        Teacher: {
                            Absent, 
                            Reason
                        }
                    }
                }
            )
            res.send({ status: 'ok', message: 'Attendance taken' })
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})


module.exports = UpdateTeacherAttendance