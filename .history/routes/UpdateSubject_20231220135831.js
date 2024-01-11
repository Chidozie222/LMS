// This page handles the routes for Subject

// Subject information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateSubject = Router()

// calling the schema
require('../models/Admin/subject')


// setting up the schema for the Subject information backend
const Subjects = mongoose.model('Subject')

// Updating subject data in the database
UpdateSubject.post('/Subject', async (req, res) => {
    const { Class, SubjectName, SubjectCode, SubjectTeacher, BookName, SchoolEmail } = req.body

    try {
        await Subjects.findOneAndUpdate(
            {  }
        )
            res.send({ status: 'ok', message: 'Subject successfully Upload' })
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = UpdateSubject