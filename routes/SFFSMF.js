// This page handles the routes for Subject Mark Field

// Subject Mark Field information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const SFFSMF = Router()

// calling the schema 
require('../models/Admin/SubjectMarkField')

// setting up the schema for the Subject Mark Field information backend
const SubjectMarkFields = mongoose.model('SubjectMarkField')

SFFSMF.get('/SFFSMF/:SchoolEmail/:Class', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail
        let Class = req.params.Class

        let user = await SubjectMarkFields.find({ SchoolEmail, Class })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})


module.exports = SFFSMF