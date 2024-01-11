// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetStudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')


// get Student marks data
GetStudentMark.get('/GetTeacher/:SchoolEmail/:Class/:Examination/:Subject', async (req, res) => {
    try {
        const { SchoolEmail, Class,  }

        let user = await StudentMarks.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})