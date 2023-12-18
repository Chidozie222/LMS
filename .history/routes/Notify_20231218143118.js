
// This page handles the routes for Notify

// Notify information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Notify = Router()

// calling the schema 
require('../models/Admin/Notify')

// setting up the schema for the Notify information backend
const Notifies = mongoose.model('Notify')


Notify.post('/Notify', async (req, res) => {
    const { Name, Receiver, Description, SchoolEmail } = req.body
    
    let UserByName = await Notifies.find({ SchoolEmail, Name })
    
    try {
        if (UserByName.length > 0) {
            res.send({ status: 'error', message: 'You have already used the notification Name' })
        } else {
            await 
        }
    } catch (error) {
        
    }
})