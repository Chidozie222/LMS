// This page handles the routes for Examination

// Examination information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Examination = Router()

// calling the schema 
require('../models/Admin/Examination')

// setting up the schema for the Examination information backend
const Examinations = mongoose.model('Examination')



Examination.post('/Examination', async (req, res) => {
    const { Class, Examination, ExaminationStartDate, ExaminationEndDate, Subject, SchoolEmail } = req.body

    let UserByExamination = await Examinations.
})