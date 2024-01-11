// getting csv files and storing the data
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');
const csv = require('csvtojson')

const CsvSapi = Router()

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

CsvSapi.use(express.static('public'))

    
CsvSapi.post('/CsvTeacher', upload.single('CsvSAPI'), async (req, res) => {
    let CsvSAPI = req.file.path

    try {
        if (!req.file) {
            res.send({ status: 'error', message: 'No csv file inputted' })
        } else {

            const csvfile = async (item) => {
                            let UserBySchoolEmail = await Teachers.find({ SchoolEmail: item.SchoolEmail, TeacherFirstName: item.TeacherFirstName })
                            let UserByTeacherUsername = await Teachers.find({ SchoolEmail: item.SchoolEmail, TeacherUsername: item.TeacherUsername })
                            let UserByTeacherEmail = await Teachers.find({ SchoolEmail: item.SchoolEmail, TeacherEmail: item.TeacherEmail })

                            if (UserBySchoolEmail.length > 0 && UserByTeacherUsername.length > 0 && UserByTeacherEmail.length > 0) {
                                res.send({status: 'error', message: 'User Already exists'})
                            } else {
                                    await Teachers.create({
                                        TeacherMale: item.TeacherMale,
                                        TeacherFemale: item.TeacherFemale,
                                        TeacherOther: item.TeacherOther,
                                        TeacherFirstName: item.TeacherFirstName,
                                        TeacherMiddleName: item.TeacherMiddleName,
                                        TeacherLastName: item.TeacherLastName,
                                        TeacherDoB: item.TeacherDoB,
                                        TeacherBloodGroup: item.TeacherBloodGroup,
                                        TeacherPhoneNumber: item.TeacherPhoneNumber,
                                        TeacherQulification: item.TeacherQulification,
                                        TeacherAddress: item.TeacherAddress,
                                        TeacherCity: item.TeacherCity,
                                        TeacherCountry: item.TeacherCountry,
                                        TeacherZipCode: item.TeacherZipCode,
                                        TeacherEmail: item.TeacherEmail,
                                        TeacherUsername: item.TeacherUsername,
                                        TeacherPassword: item.TeacherPassword,
                                        TeacherJoiningDate: item.TeacherJoiningDate,
                                        TeacherLeavingDate: item.TeacherLeavingDate,
                                        TeacherCurrentPosition: item.TeacherCurrentPosition,
                                        TeacherEmployeeCode: item.TeacherEmployeeCode,
                                        TeacherWorkingHours: item.TeacherWorkingHours,
                                        SchoolEmail: item.SchoolEmail
                                    })
                                    res.send({status: 'ok', message: 'Data uploaded successfully'})
                                }
                        }
            csv()
            .fromFile(CsvTeacher)
                .then((jsonObj) => {
                    for (let item of jsonObj) {
                         csvfile(item)
                    }
                })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})


module.exports = CsvTeacher