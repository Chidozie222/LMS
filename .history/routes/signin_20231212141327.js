const { Router } = require("express");
const mongoose = require("mongoose")


const signin = Router()

// declaring the mongoose schema for sign up
require('../models/Admin/auth')

// calling and setting up the mongoose schema
const Auth = mongoose.model('Auth')

signin.post('/signin', async (req, res) => {
    const { SchoolEmail, password } = req.body
    
    // error handler
    try {
        // checking if the email exists
        let user = await Auth.findOne({ SchoolEmail })
        // ifesle statement for checking the user vaildation
        if (user && user.password == password) {
            res.send({status: 'ok', message: 'you successfully logged in', data: user})
        } else {
            res.send({status: 'error', message: ''})
        }
    } catch (error) {
        
    }
})