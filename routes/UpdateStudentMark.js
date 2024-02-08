// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateStudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')



// routes for posting the student marks information
UpdateStudentMark.post('/UpdateStudentMark', async(req, res) => {
    const { Class, Examination, Subject, StudentFirstName, StudentLastName, Grade, Remarks, SchoolEmail } = req.body


    try {
            await StudentMarks.findOneAndUpdate(
                { SchoolEmail, Class, Examination, Subject, StudentFirstName, StudentLastName },
                {
                    $set:
                    {
                        Grade, 
                        Remarks
                    }
                }
            )
            res.send({ status: 'ok', message: 'data uploaded successfully' })
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = UpdateStudentMark
