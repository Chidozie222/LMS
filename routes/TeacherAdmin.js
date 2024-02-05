const { Router } = require("express");
const mongoose = require("mongoose")


const TeacherAuth = Router()

// calling the schema 
require('../models/Admin/teacher')

// setting up the schema for the Student and Parent information backend
const Teachers = mongoose.model('Teachers')

TeacherAuth.post('/TeacherAuth', async (req, res) => {
    const { SchoolEmail, TeacherEmail, TeacherPassword } = req.body
    
    // error handler
    try {
        // checking if the email exists
        let user = await Teachers.findOne({ SchoolEmail, TeacherEmail })
        // ifesle statement for checking the user vaildation
        if (user) {
            if (user.TeacherPassword == TeacherPassword) {
                res.send({status: 'ok', message: 'you successfully logged in', data: user})
            } else {
                res.send({status: 'error', message: 'Password is Incorrect'})
            }
        } else {
            res.send({status: 'error', message: 'Please check your login detail are not correct'})
        }
    } catch (error) {
        res.send({status: 'error', message: 'error in the server'})
    }
})


module.exports = TeacherAuth