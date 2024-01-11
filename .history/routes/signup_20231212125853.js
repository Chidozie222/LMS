// sign up backend code 
const { Router } = require("express");
const mongoose = require('mongoose')
const multer = require('multer')

const signup = Router()

// declaring the mongoose schema for sign up
require('../models/Admin/auth')

// calling and setting up the mongoose schema
const Auth = mongoose.model('Auth')

// initialing the setting for the photo or school logo

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    }, 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

candidateInfo.use(express.static('public'))

// sign up post route

signup.post('/signup', upload.single('SchoolLogo'), async (req, res) => {
    const { SchoolName, SchoolPhone, SchoolEmail, SchoolAddress, SchoolCity, SchoolState, SchoolCountry, SchoolWebsite, password } = req.body
    try {
        // check if their is a user a
        let olduser = await Auth.findOne({ SchoolName })
        if (olduser.length > 0) {
            res.send({status: 'error', message: "User already exists"})
        }
    } catch (error) {
        res.send({status: 'error', message: 'error in the server'})
    }
})