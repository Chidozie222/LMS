// This page handles the routes for TimeTable

// TimeTable information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateTimeTable = Router()

// calling the schema 
require('../models/Admin/TimeTable')

// setting up the schema for the TimeTable information backend
const TimeTables = mongoose.model('TimeTable')



UpdateTimeTable.put('/UpdateTimeTable/:id', async (req, res) => {
    const { EndTime, Subject, Teacher, Day, Class } = req.body;
    const _id = req.params.id;

    try {
            await TimeTables.findByIdAndUpdate(
                { _id },
                {
                    $set: 
                    { 
                        EndTime, 
                        Subject, 
                        Teacher, 
                        Day, 
                        Class,
                    }
                }
            )
            res.send({ status: 'ok', message: 'Updated successfully' })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateTimeTable.get('/getTimeTablesByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await TimeTables.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateTimeTable.delete('/DeleteTimeTables/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await TimeTables.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "ok", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


module.exports = UpdateTimeTable
