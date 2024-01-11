// This page handles the routes for Examination

// Examination information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentExam = Router()

// calling the schema 
require('../models/Admin/Examination')

// setting up the schema for the Examination information backend
const Examinations = mongoose.model('Examination')


StudentExam.get('/StudentExam/:SchoolEmail/:Class', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail
        let Class = req.params.Class;

        let user = await Examinations.findOne({ SchoolEmail, Class })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})


module.exports = StudentExam