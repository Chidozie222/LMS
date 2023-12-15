// sign up backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const signup = Router()

// declaring the mongoose schema for sign up
require('../models/Admin/auth')

// calling and setting up the mongoose schema
const Auth = mongoose.model('Auth')

// sign up post route

signup.post('/signup', async (req, res) => {
    const { SchoolName, SchoolPhone, SchoolEmail, SchoolAddress, SchoolCity, SchoolState, SchoolCountry, SchoolWebsite, SchoolLogo, password } = req.body
    
    let olduser = await Auth.findOne({School})

})