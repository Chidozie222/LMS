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

CsvSapi.use(express.static('public'))

    
CsvSapi.post('/CsvSAPI', upload.single('CsvSAPI'), async (req, res) => {
    let CsvSAPI = req.file.path

    try {
        if (!req.file) {
            res.send({ status: 'error', message: 'No csv file inputted' })
        } else {

            const csvfile = async (item) => {
                let UserByClass = await SAPI.find({ SchoolEmail: item.SchoolEmail, Class: item.Class })
                let UserBySchoolEmail = await SAPI.find({ SchoolEmail: item.SchoolEmail, StudentFirstName: item.StudentFirstName })
                let UserByStudentUsername = await SAPI.find({ SchoolEmail: item.SchoolEmail, StudentUsername: item.StudentUsername })
                let UserByParentUserName = await SAPI.find({ SchoolEmail: item.SchoolEmail, ParentUserName: item.ParentUserName })
                let UserByParentEmail = await SAPI.find({ SchoolEmail: item.SchoolEmail, ParentEmail: item.ParentEmail })
                let UserByStudentEmail = await SAPI.find({ SchoolEmail: item.SchoolEmail, StudentEmail: item.StudentEmail })
                let UserByClassCapacity = await Classes.find({ SchoolEmail: item.SchoolEmail, Class: item.Class })

                        if (UserByClass.length > UserByClassCapacity[0].ClassCapacity) {
                            res.send({ status: 'error', message: 'The class is full' })
                        } else if (UserBySchoolEmail.length > 0 && UserByStudentUsername.length > 0 && UserByParentUserName.length > 0 && UserByParentEmail.length > 0 && UserByStudentEmail.length > 0) {
                            res.send({status: 'error', message: 'User Already exists'})
                        } else {
                                await SAPI.insertMany([{
                                    StudentMale: item.StudentMale,
                                    StudentFemale: item.StudentFemale,
                                    StudentOther: item.StudentOther,
                                    StudentFirstName: item.StudentFirstName,
                                    StudentMiddleName: item.StudentMiddleName,
                                    StudentLastName: item.StudentLastName,
                                    StudentDoB: item.StudentDoB,
                                    StudentBloodGroup: item.StudentBloodGroup,
                                    StudentPhoneNumber: item.StudentPhoneNumber,
                                    StudentAddress: item.StudentAddress,
                                    StudentCity: item.StudentCity,
                                    StudentCountry: item.StudentCountry, 
                                    StudentZipCode: item.StudentZipCode,
                                    ParentMale: item.ParentMale, 
                                    ParentFemale: item.ParentFemale, 
                                    ParentOther: item.ParentOther, 
                                    ParentFirstName, 
                                    ParentMiddleName,
                                    ParentLastName,
                                    ParentUserName,
                                    ParentPassword,
                                    ParentBloodGroup,
                                    ParentEmail,
                                    ParentPhone,
                                    ParentEducation,
                                    ParentProfession,
                                    StudentEmail,
                                    StudentUsername,
                                    StudentPassword,
                                    Class,
                                    RollNumber,
                                    SchoolEmail
                                }])
                                res.send({status: 'ok', message: 'Data uploaded successfully'})
                            }
                        }
            csv()
            .fromFile(CsvSAPI)
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