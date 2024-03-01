// This page handles the routes for Class

// Class information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateClass = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')

UpdateClass.post('/UpdateClass', async (req, res) => {
    const { id, ClassNumber, ClassCapacity, ClassTeacher, ClassStartingOn, ClassEndingOn, ClassLocation, ClassFeeType } = req.body
    try {
        await Classes.findByIdAndUpdate(
                { _id: id },
                {
                    $set:
                    { 
                        ClassNumber, 
                        ClassCapacity, 
                        ClassTeacher, 
                        ClassStartingOn, 
                        ClassEndingOn, 
                        ClassLocation, 
                        ClassFeeType
                    }
                },
                { upsert: true }
            )
            res.send({ status: 'ok', message: 'Class successfully created' })
        
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateClass.get('/getClassByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await Classes.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateClass.delete('/DeleteClass/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await Classes.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "OK", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateClass
