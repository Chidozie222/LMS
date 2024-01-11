// This page handles the routes for Subject

// Subject information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Subject = Router()

// calling the schema
require('../models/Admin/subject')


// setting up the schema for the Subject information backend
const Subjects = mongoose.model('Subject')

// storing subject data in the database
Subject.post('/Subject', async (req, res) => {
    const { Class, SubjectName, SubjectCode, SubjectTeacher, BookName, SchoolEmail } = req.body

    try {
        let UserBySubjectName = await Subjects.find({ SchoolEmail, SubjectName })
        let UserBySubjectCode = await Subjects.find({ SchoolEmail, SubjectCode })
        
        if (UserBySubjectName.length > 0 && UserBySubjectCode.length > 0) {
            res.send({ status: 'error', message: 'User already exist' })
        } else {
            await Subjects.create({
                Class, 
                SubjectName, 
                SubjectCode, 
                SubjectTeacher, 
                BookName, 
                SchoolEmail
            })
            res.send({ status: 'ok', message: 'Subject successfully Upload' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = Su