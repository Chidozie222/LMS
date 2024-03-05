// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateStudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')



// routes for posting the student marks information
UpdateStudentMark.put('/UpdateStudentMark/:id', async(req, res) => {
    const { Grade, Remark } = req.body;
    const _id = req.params.id;


    try {
            await StudentMarks.findByIdAndUpdate(
                { _id },
                {
                    $set:
                    {
                        Grade, 
                        Remark
                    }
                }
            )
            res.send({ status: 'ok', message: 'data uploaded successfully' })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateStudentMark.get('/getStudentMarksByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await StudentMarks.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateStudentMark.delete('/DeleteStudentMarks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await StudentMarks.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "ok", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateStudentMark