const { Router } = require("express");
const mongoose = require("mongoose")


const StudentAuth = Router()

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

StudentAuth.post('/StudentAuth', async (req, res) => {
    const { SchoolEmail, StudentEmail, StudentPassword } = req.body
    
    // error handler
    try {
        // checking if the email exists
        let user = await SAPI.findOne({ SchoolEmail, StudentEmail })
        // ifesle statement for checking the user vaildation
        if (user) {
            if (user.StudentPassword == StudentPassword) {
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


module.exports = StudentAuth