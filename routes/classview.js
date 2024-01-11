const { Router } = require("express");
const mongoose = require("mongoose")

let ClassView = Router()

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

ClassView.get('/ClassView/:SchoolEmail/:class', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail
        let Class = req.params.class

        let user = await SAPI.find({ SchoolEmail, Class })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = ClassView