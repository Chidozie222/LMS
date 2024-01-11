// This page handles the routes for Teacher

// Teacher information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const UpdateTeacher = Router()

// calling the schema 
require('../models/Admin/teacher')

// setting up the schema for the Student and Parent information backend
const Teachers = mongoose.model('Teachers')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

UpdateTeacher.use(express.static('public'))

// Post all teachers from database

UpdateTeacher.post('/Updateteachers', upload.single('TeacherPicture'), async (req, res) => {
    const { TeacherMale, TeacherFemale, TeacherOther,  TeacherFirstName, TeacherMiddleName, TeacherLastName, TeacherDoB, TeacherBloodGroup, TeacherPhoneNumber, TeacherQulification, TeacherAddress, TeacherCity, TeacherCountry, TeacherZipCode, TeacherJoiningDate, TeacherLeavingDate, TeacherCurrentPosition, TeacherEmployeeCode, TeacherWorkingHours, SchoolEmail } = req.body
    
    let TeacherPicture = req.file.filename

    let TP = req.file.size

    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {

        if (TP > MaxFileSize) {
                res.send({status: 'error', message: 'The pictures is greater than 3mb, please reduce it'})
            } else {
                await Teach
                res.send({status: 'ok', message: 'Data updated successfully'})
        }
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})

module.exports = UpdateTeacher