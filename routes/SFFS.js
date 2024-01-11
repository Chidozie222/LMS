// This page handles the routes for Subject

// Subject information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const SFFS = Router()

// calling the schema
require('../models/Admin/subject')


// setting up the schema for the Subject information backend
const Subjects = mongoose.model('Subject')

// getting Subject data
SFFS.get('/SFFS/:SchoolEmail/:Class', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail
        let Class = req.params.Class;

        let user = await Subjects.find({ SchoolEmail, Class })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = SFFS