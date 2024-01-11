
// This page handles the routes for Notify

// Notify information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateNotify = Router()

// calling the schema 
require('../models/Admin/Notify')

// setting up the schema for the Notify information backend
const Notifies = mongoose.model('Notify')


UpdateNotify.post('/UpdateNotify', async (req, res) => {
    const { Name, Receiver, Description, SchoolEmail } = req.body
    
    try {
            await Notifies.findOneAndUpdate(
                { SchoolEmail, Name },
                {
                    $set: { 
                        Receiver, 
                        Description
                    }
                }
            )
            res.send({ status: 'ok', message: 'data uploaded successfully' })
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = UpdateNotify