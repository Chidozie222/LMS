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

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')

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

UpdateSapi.post('/UpdateSapi', upload.single('StudentPicture'), async (req, res) => {
    const { StudentGender, StudentFirstName, StudentMiddleName, StudentLastName, StudentDoB, StudentBloodGroup, StudentPhoneNumber, StudentAddress, StudentCity, StudentCountry, StudentZipCode, ParentID, Role, Class, RollNumber, StudentUsername, SchoolEmail } = req.body
    
    let StudentPicture = req.file.filename

    let SP = req.file.size

    let MaxFileSize = 3 * 1024 * 1024 * 1024

    let UserByClassCapacity = await Classes.findOne({ SchoolEmail, Class })
    let userByClass = await SAPI.find({ SchoolEmail, Class })


    try {

        if ( MaxFileSize >= SP) {
                res.send({status: 'error', message: 'The pictures is greater than 3mb, please reduce it'})
            } else if (userByClass.length > UserByClassCapacity.ClassCapacity) {
                res.send({ message: `The Class is full` })
            } else {
            await SAPI.findOneAndUpdate(
                    {SchoolEmail, StudentUsername},
                    {
                        $set:
                        {
                            StudentPicture,
                            StudentGender,
                            StudentFirstName, 
                            StudentMiddleName, 
                            StudentLastName, 
                            StudentDoB, 
                            StudentBloodGroup, 
                            StudentPhoneNumber, 
                            StudentAddress, 
                            StudentCity, 
                            StudentCountry, 
                            StudentZipCode, 
                            ParentPhone,
                            Role,
                            Class, 
                            RollNumber, 
                            SchoolEmail
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

module.exports = UpdateSapi
