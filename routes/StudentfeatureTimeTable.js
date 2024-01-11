// This page handles the routes for TimeTable

// TimeTable information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentFeatureTimeTable = Router()

// calling the schema
require('../models/Admin/TimeTable')


// setting up the schema for the TimeTable information backend
const TimeTables = mongoose.model('TimeTable')

// getting TimeTable data
StudentFeatureTimeTable.get('/StudentFeatureTimeTable/:SchoolEmail/:Class', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail
        let Class = req.params.Class

        let user = await TimeTables.find({ SchoolEmail, Class })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = StudentFeatureTimeTable