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
    // check if the image was gotten from the frontend
    if (!req.file) {
        return res.status(400).send({ status: 'error', message: 'No image file uploaded' });
    }
    // Control for the image   
    let maxFileSize = 3 * 1024 * 1024 * 1024
    const SchoolLogo = req.file.filename;


    try {
        // check if their is a user already existing
        if (maxFileSize >= req.file.size) {
            let olduser = await Auth.findOne({ SchoolName })
            if (olduser.length > 0) {
                // return if the user exist 
                res.send({status: 'error', message: "User already exists"})
            } else {
                await Auth.create({
                    SchoolName,
                    SchoolPhone, 
                    SchoolEmail, 
                    SchoolAddress, SchoolCity, SchoolState, SchoolCountry, SchoolWebsite,
                    password
                })
            }
        } else {
            res.send({status: 'error', message: 'file is too large, max of 3MB is alowed'})
        }
    } catch (error) {
        res.send({status: 'error', message: 'error in the server'})
    }
})