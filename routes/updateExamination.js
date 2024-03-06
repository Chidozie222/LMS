
// This page handles the routes for Examination

// Examination information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateExamination = Router()

// calling the schema 
require('../models/Admin/Examination')

// setting up the schema for the Examination information backend
const Examinations = mongoose.model('Examination')


UpdateExamination.put('/UpdateExamination/:id', async (req, res) => {
    const {  Class, ExaminationStartDate, ExaminationEndDate, Subject  } = req.body
    const _id = req.params.id
    
    try {
            await Examinations.findByIdAndUpdate(
                { _id },
                {
                    $set: { 
                        Class, 
                        ExaminationStartDate, 
                        ExaminationEndDate, 
                        Subject
                    }
                }
            )
            res.send({ status: 'ok', message: 'data uploaded successfully' })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateExamination.get('/getExaminationByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await Examinations.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateExamination.delete('/DeleteExamination/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await Examinations.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "ok", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateExamination