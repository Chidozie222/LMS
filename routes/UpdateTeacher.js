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

UpdateTeacher.put('/UpdateTeachers/:id', upload.single('TeacherPicture'), async (req, res) => {
    const { TeacherGender, TeacherFirstName, TeacherMiddleName, TeacherLastName, TeacherDoB, TeacherBloodGroup, TeacherPhoneNumber, TeacherQualification, TeacherAddress, TeacherCity, TeacherCountry, TeacherZipCode, TeacherEmail, TeacherUsername, TeacherPassword, TeacherJoiningDate, TeacherLeavingDate, TeacherCurrentPosition, TeacherEmployeeCode, TeacherWorkingHours, SchoolEmail } = req.body
    const _id = req.params.id;
    
    let TeacherPicture;

    let TP;

    let MaxFileSize;
    if (req.file) {
         TeacherPicture = req.file.filename;
         
         TP = req.file.size;
         
         MaxFileSize = 3 * 1024 * 1024 * 1024;
    }


    try {

        
        let UserBySchoolEmail = await Teachers.find({ SchoolEmail, TeacherFirstName })
        let UserByTeacherUsername = await Teachers.find({ SchoolEmail, TeacherUsername })
        let UserByTeacherEmail = await Teachers.find({ SchoolEmail, TeacherEmail })

        if (UserBySchoolEmail.length > 0 && UserByTeacherUsername.length > 0 && UserByTeacherEmail.length > 0) {
            res.send({status: 'error', message: 'User Already exists'})
        } else if (!req.file) { 
            await Teachers.findByIdAndUpdate(
                    { _id },
                    {
                        $set:
                        {
                            TeacherGender, TeacherFirstName, TeacherMiddleName, TeacherLastName, TeacherDoB, TeacherBloodGroup, TeacherPhoneNumber, TeacherQualification, TeacherAddress, TeacherCity, TeacherCountry, TeacherZipCode, TeacherEmail, TeacherUsername, TeacherPassword, TeacherJoiningDate, TeacherLeavingDate, TeacherCurrentPosition, TeacherEmployeeCode, TeacherWorkingHours
                        }
                    },
                    { upsert: true }
                )
                res.send({status: 'ok', message: 'Data updated successfully'})
        } else if (TP > MaxFileSize) {
                res.send({status: 'error', message: 'The pictures is greater than 3mb, please reduce it'})
            } else {
                await Teachers.findByIdAndUpdate(
                    { _id },
                    {
                        $set:
                        {
                            TeacherPicture,
                            TeacherGender, TeacherFirstName, TeacherMiddleName, TeacherLastName, TeacherDoB, TeacherBloodGroup, TeacherPhoneNumber, TeacherQualification, TeacherAddress, TeacherCity, TeacherCountry, TeacherZipCode, TeacherEmail, TeacherUsername, TeacherPassword, TeacherJoiningDate, TeacherLeavingDate, TeacherCurrentPosition, TeacherEmployeeCode, TeacherWorkingHours
                        }
                    },
                    { upsert: true }
                )
                res.send({status: 'ok', message: 'Data updated successfully'})
        }
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateTeacher.get('/getTeachersByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await Teachers.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateTeacher.delete('/DeleteTeachers/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await Teachers.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "ok", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateTeacher
