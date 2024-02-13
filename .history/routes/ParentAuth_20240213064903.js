const { Router } = require("express");
const mongoose = require("mongoose")


const ParentAuth = Router()

// calling the schema 
require('../models/Admin/Parent')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

ParentAuth.post('/ParentAuth', async (req, res) => {
    const { SchoolEmail, ParentEmail, ParentPassword } = req.body
    
    // error handler
    try {
        // checking if the email exists
        let user = await SAPI.findOne({ SchoolEmail, ParentEmail })
        // ifesle statement for checking the user vaildation
        if (user) {
            if (user.ParentPassword == ParentPassword) {
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


module.exports = ParentAuth