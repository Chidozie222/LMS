// This page handles the routes for Event

// Event information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetEvent = Router()

// calling the schema 
require('../models/Admin/Event')

// setting up the schema for the Event information backend
const Events = mongoose.model('Event')


GetEvent.get('/GetEvent/:SchoolEmail', async (req, res) => {
    const SchoolEmail = req.params.SchoolEmail
    try {
        let UserBySchoolEmail = await Events.find({ SchoolEmail })

        if (UserBySchoolEmail.length > 0) {
            res.send({ stau })
        } else {
            
        }
    } catch (error) {
        
    }
})