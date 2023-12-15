// This page handles the routes for Teacher

// Teacher information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const Teacher = Router()

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

Teacher.use(express.static('public'))

// Post all teachers from database

Teacher.post('/teachers', upload.single('TeacherPicture'), async (req, res) => {
    const { TeacherMale, TeacherFemale, TeacherOther,  TeacherFirstName, TeacherMiddleName, TeacherLastName, TeacherDoB, TeacherBloodGroup, TeacherPhoneNumber, TeacherQulification, TeacherAddress, TeacherCity, TeacherCountry, TeacherZipCode, TeacherEmail, TeacherUsername, TeacherPassword, TeacherJoiningDate, TeacherLeavingDate, TeacherCurrentPosition, TeacherEmployeeCode, TeacherWorkingHours, SchoolEmail, } = req.body
    
    let TeacherPicture = req.file.filename

    let TP = req.file.size

    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {
        let UserBySchoolEmail = await Teachers.find({ SchoolEmail, TeacherFirstName })
        let UserByStudentUsername = await Teachers.find({ SchoolEmail, TeacherUsername })
        let UserByParentEmail = await Teachers.find({ SchoolEmail, TeacherEmail })

        if (UserBySchoolEmail.length > 0 && UserByStudentUsername.length > 0 &&  UserByParentEmail.length > 0 && UserByStudentEmail.length > 0) {
            res.send({status: 'error', message: 'User Already exists'})
        } else {
            if (TP > MaxFileSize) {
                res.send({status: 'error', message: 'The pictures is greater than 3mb, please reduce it'})
            } else {
                await Teachers.create({
                    TeacherPicture,
                    TeacherMale,
                    TeacherFemale,
                    TeacherOther,
                    TeacherFirstName,
                    TeacherMiddleName,
                    TeacherLastName,
                    TeacherDoB,
                    TeacherBloodGroup,
                    TeacherPhoneNumber,
                    TeacherQulification,
                    TeacherAddress,
                    TeacherCity,
                    TeacherCountry,
                    TeacherZipCode,
                    TeacherEmail,
                    TeacherUsername,
                    TeacherPassword,
                    TeacherJoiningDate,
                    TeacherLeavingDate,
                    TeacherCurrentPosition,
                    TeacherEmployeeCode,
                    TeacherWorkingHours,
                    SchoolEmail
                })
                res.send({status: 'ok', message: 'Data uploaded successfully'})
             }
        }
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})

module.exports = Teacher