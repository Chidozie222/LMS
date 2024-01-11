// This page handles the routes for TimeTable

// TimeTable information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetTimeTable = Router()

// calling the schema
require('../models/Admin/TimeTable')


// setting up the schema for the TimeTable information backend
const TimeTables = mongoose.model('TimeTable')

// getting TimeTable data
GetTimeTable.get('/GetTimeTable/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await TimeTables.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = GetTimeTable