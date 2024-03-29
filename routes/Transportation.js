
// This page handles the routes for Transportation

// Transportation backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Transportation = Router()

// calling the schema 
require('../models/Admin/Transportation')

// setting up the schema for the Notify information backend
const Transportations = mongoose.model('Transportation')


Transportation.post('/Transportation', async (req, res) => {
    const { VehicleName, VehicleNumber, DriverName, DriverPhone, RouteFees, VehicleRoute, SchoolEmail } = req.body

    try {
        const UserByDriverName = await Transportations.findOne({ SchoolEmail, DriverName })

        if (UserByDriverName) {
            res.send({ status: 'error', message: 'User has already available' })
        } else {
            await Transportations.create({
                VehicleName, 
                VehicleNumber, 
                DriverName, 
                DriverPhone, 
                RouteFees, 
                VehicleRoute, 
                SchoolEmail
            })
            res.send({ status: 'ok', message: 'data has been uploaded' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = Transportation