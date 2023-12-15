// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')

// routes for posting the student marks information


StudentMark.post('/StudentMark', async(req, res) => {
    const { Class, Examination, Subject, RollNumber, StudentFirstName, StudentLastName, Grade, Remarks, SchoolEmail } = req.body

    let User = await StudentMarks.find({ SchoolEmail, Class, Examination, Subject, StudentFirstName, StudentLastName })

    try {
        if (User.length > 0) {
            res.send({ status: 'error', message: 'sorry, but student has been given a grade' })
        } else {
            await StudentMarks.create({
                Class, 
                Examination, 
                Subject, 
                Student: {
                     RollNumber, 
                        StudentFirstName, 
                        StudentLastName, 
                        Grade, 
                        Remarks,
                } 
                SchoolEmail
            })
            res.send({ status: 'ok', message: 'data uploaded successfully' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})