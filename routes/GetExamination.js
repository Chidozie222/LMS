// This page handles the routes for Examination

// Examination information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetExamination = Router()

// calling the schema 
require('../models/Admin/Examination')

// setting up the schema for the Examination information backend
const Examinations = mongoose.model('Examination')


GetExamination.get('/getExamination/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await Examinations.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found', data: []})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})


module.exports = GetExamination