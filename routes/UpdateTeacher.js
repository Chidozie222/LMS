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

UpdateTeacher.post('/UpdateTeachers', upload.single('TeacherPicture'), async (req, res) => {
    const { TeacherMale, TeacherFemale, TeacherOther,  TeacherFirstName, TeacherMiddleName, TeacherLastName, TeacherDoB, TeacherBloodGroup, TeacherPhoneNumber,  TeacherQualification, TeacherAddress, TeacherCity, TeacherCountry, TeacherZipCode, TeacherJoiningDate, TeacherLeavingDate, TeacherCurrentPosition, TeacherEmployeeCode, TeacherWorkingHours, _id } = req.body
    
    let TeacherPicture = req.file.filename

    let TP = req.file.size

    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {

        if (!req.file) { 
            await Teachers.findByIdAndUpdate(
                    { _id },
                    {
                        $set:
                        {
                            TeacherMale, 
                            TeacherFemale, 
                            TeacherOther,  
                            TeacherFirstName, 
                            TeacherMiddleName, 
                            TeacherLastName,
                            TeacherDoB, 
                            TeacherBloodGroup,
                            TeacherPhoneNumber, 
                            TeacherQualification, 
                            TeacherAddress, 
                            TeacherCity, 
                            TeacherCountry, 
                            TeacherZipCode, 
                            TeacherJoiningDate, 
                            TeacherLeavingDate, 
                            TeacherCurrentPosition,
                            TeacherEmployeeCode, 
                            TeacherWorkingHours, 
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
                            TeacherMale, 
                            TeacherFemale, 
                            TeacherOther,  
                            TeacherFirstName, 
                            TeacherMiddleName, 
                            TeacherLastName,
                            TeacherDoB, 
                            TeacherBloodGroup,
                            TeacherPhoneNumber, 
                            TeacherQualification, 
                            TeacherAddress, 
                            TeacherCity, 
                            TeacherCountry, 
                            TeacherZipCode, 
                            TeacherJoiningDate, 
                            TeacherLeavingDate, 
                            TeacherCurrentPosition,
                            TeacherEmployeeCode, 
                            TeacherWorkingHours, 
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
        res.send({ status: "OK", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateTeacher
