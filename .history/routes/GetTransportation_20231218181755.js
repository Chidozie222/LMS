
// This page handles the routes for Transportation

// Transportation backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetTransportation = Router()

// calling the schema 
require('../models/Admin/Transportation')

// setting up the schema for the Notify information backend
const Transportations = mongoose.model('Transportation')


GetTransportation.get('/GetTransportation/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await Transportations.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

