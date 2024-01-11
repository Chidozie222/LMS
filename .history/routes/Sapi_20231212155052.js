// This page handles the routes for parent and Student

// sign up backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer')

const Sapi = Router()

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

// setting up the multer module for it to accept media files

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cd) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

Sapi.use(express.static('public'))


Sapi.post('/student_and_parent', upload.fields([{ name: 'StudentPicture', maxCount: 1 }, { name: 'ParentPicture', maxCount: 1 }]), async (req, res) => {
    const { StudentMale, StudentFemale, StudentOther, StudentFirstName, StudentMiddleName, StudentLastName, StudentDoB, StudentBloodGroup, StudentPhoneNumber, StudentAddress, StudentCity, StudentCountry, StudentZipCode, ParentMale, ParentFemale, ParentOther, ParentFirstName, ParentMiddleName, ParentLastName, ParentUserName, ParentPassword, ParentBloodGroup, ParentEmail, ParentPhone, ParentEducation, ParentProfession, StudentEmail, StudentUsername, StudentPassword, StudentJoiningDate, Class, RollNumber, SchoolEmail } = req.body
    
    let StudentPicture = req.files['StudentPicture'][0].filename
    let ParentPicture = req.files['ParentPicture'][0].filename

    let SP = req.files['StudentPicture'][0].size
    let PP = req.files['ParentPicture'][0].size

    let MaxFileSize = 3 * 1024 * 1024 * 1024

    try {
        let UserBySchoolEmail = await SAPI.find({ SchoolEmail })
        let 
    } catch (error) {
        
    }
})