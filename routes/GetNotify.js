
// This page handles the routes for Notify

// Notify information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetNotify = Router()

// calling the schema 
require('../models/Admin/Notify')

// setting up the schema for the Notify information backend
const Notifies = mongoose.model('Notify')

GetNotify.get('/getNotify/:SchoolEmail', async (req, res) => {
    const SchoolEmail = req.params.SchoolEmail
    try {
        let UserBySchoolEmail = await Notifies.find({ SchoolEmail })

        if (UserBySchoolEmail.length > 0) {
            res.send({ status: 'ok', data: UserBySchoolEmail })
        } else {
            res.send({ status: 'pending', message: 'No Data Found', data: [] })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = GetNotify