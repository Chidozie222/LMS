// This page handles the routes for Subject Mark Field

// Subject Mark Field information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateSMF = Router()

// calling the schema 
require('../models/Admin/SubjectMarkField')

// setting up the schema for the Subject Mark Field information backend
const SubjectMarkFields = mongoose.model('SubjectMarkField')


UpdateSMF.post('/UpdateSubjectMarkField', async (req, res) => {
    const { _id, Field } = req.body

    try {
        await SubjectMarkFields.findByIdAndUpdate(
            { _id },
            {
                $set:
                {
                    Field
                }
            },
            { upsert: true }
        )
            res.send({ status: 'ok', message: 'Data uploaded successfully' })

    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateSMF.get('/getSubjectMarkFieldsByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await SubjectMarkFields.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateSMF.delete('/DeleteSubjectMarkFields/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await SubjectMarkFields.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "ok", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateSMF
