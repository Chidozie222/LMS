// This page handles the routes for Attendance

// Attendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Attendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the Attendance information backend
const Attendances = mongoose.model('Attendance')



Attendance.post('/Attendance', async (req, res) => {
    const { Class, Date, RollNumber, StudentFirstName, StudentLastName, Absent, Reason, SchoolEmail } = req.body 

    let UserByClassAndDate = await Attendances.find({ SchoolEmail, Class, Date })
    
    try {
        if (UserByClassAndDate.length > 0) {
            res.send({ status: 'error', message: 'attendances has already been taken' })
        } else {
            await Attendances.insertMany([{
                Class,
                Date,
                student: {
                    RollNumber,
                    StudentFirstName,
                    StudentLastName,
                    Absent,
                    Reason
                },
                SchoolEmail
            }])
            res.send({ status: 'ok', message: 'Attendance taken' })
        }
    } catch (error) {
        
    }
})