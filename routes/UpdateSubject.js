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
UpdateSubject.post('/UpdateSubject', async (req, res) => {
    const { _id, Class, SubjectCode, SubjectTeacher, BookName  } = req.body

    try {
        await Subjects.findByIdAndUpdate(
            { _id },
            {
                $set:
                {
                    Class,
                    SubjectCode, 
                    SubjectTeacher, 
                    BookName
                }
            },
            { upsert: true }
        )
            res.send({ status: 'ok', message: 'Subject successfully Upload' })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateSubject.get('/getSubjectsByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await Subjects.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateSubject.delete('/DeleteSubjects/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await Subjects.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "ok", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateSubject