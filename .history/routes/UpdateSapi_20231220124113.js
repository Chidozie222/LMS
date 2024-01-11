// This page handles the routes for Teacher

// Teacher information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const UpdateSapi = Router()

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

UpdateSapi.use(express.static('public'))

// Post all teachers from database

UpdateSapi.post('/UpdateSapi', upload.fields([{ name: 'StudentPicture', maxCount: 1 }, { name: 'ParentPicture', maxCount: 1 }]), async (req, res) => {
    const { StudentMale, StudentFemale, StudentOther, StudentFirstName, StudentMiddleName, StudentLastName, StudentDoB, StudentBloodGroup, StudentPhoneNumber, StudentAddress, StudentCity, StudentCountry, StudentZipCode, ParentMale, ParentFemale, ParentOther, ParentFirstName, ParentMiddleName, ParentLastName, ParentBloodGroup, ParentPhone, ParentEducation, ParentProfession, Class, RollNumber, StudentUsername, SchoolEmail } = req.body
    
    let StudentPicture = req.files['StudentPicture'][0].filename
    let ParentPicture = req.files['ParentPicture'][0].filename

    let SP = req.files['StudentPicture'][0].size
    let PP = req.files['ParentPicture'][0].size

    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {

        if (SP > MaxFileSize && PP > MaxFileSize) {
                res.send({status: 'error', message: 'The pictures is greater than 3mb, please reduce it'})
            } else {
            await SAPI.updateOne(
                    {SchoolEmail, StudentUsername},
                    {
                        $set:
                        {
                            StudentMale, StudentFemale, StudentOther, StudentFirstName, StudentMiddleName, StudentLastName, StudentDoB, StudentBloodGroup, StudentPhoneNumber, StudentAddress, StudentCity, StudentCountry, StudentZipCode, ParentMale, ParentFemale, ParentOther, ParentFirstName, ParentMiddleName, ParentLastName, ParentBloodGroup, ParentPhone, ParentEducation, ParentProfession, Class, RollNumber, SchoolEmail
                        }
                    },
                    { upsert: true }
                )
                res.send({status: 'ok', message: 'Data uploaded successfully'})
             }
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})

module.exports = UpdateTeacher