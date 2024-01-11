
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
        UserByVehicleName = await Transportations.find({ SchoolEmail, V })
        UserByDriverName = await Transportations.find({ SchoolEmail, DriverName })
    } catch (error) {
        
    }
})