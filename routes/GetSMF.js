// This page handles the routes for Subject Mark Field

// Subject Mark Field information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetSMF = Router()

// calling the schema 
require('../models/Admin/SubjectMarkField')

// setting up the schema for the Subject Mark Field information backend
const SubjectMarkFields = mongoose.model('SubjectMarkField')

GetSMF.get('/getSMF/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await SubjectMarkFields.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found', data: []})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})


module.exports = GetSMF