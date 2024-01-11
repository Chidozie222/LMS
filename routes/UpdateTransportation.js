
// This page handles the routes for Transportation

// Transportation backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateTransportation = Router()

// calling the schema 
require('../models/Admin/Transportation')

// setting up the schema for the Notify information backend
const Transportations = mongoose.model('Transportation')


UpdateTransportation.post('/UpdateTransportation', async (req, res) => {
    const { VehicleName, VehicleNumber, DriverName, DriverPhone, RouteFees, VehicleRoute, SchoolEmail } = req.body

    try {
            await Transportations.Update(
                { SchoolEmail, DriverName },
                {
                    $set: 
                    {
                        VehicleName, 
                        VehicleNumber, 
                        DriverPhone, 
                        RouteFees, 
                        VehicleRoute
                    }
                }
            )
            res.send({ status: 'ok', message: 'data has been uploaded' })
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = UpdateTransportation