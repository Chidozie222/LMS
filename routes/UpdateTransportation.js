
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
    const { VehicleName, VehicleNumber, DriverPhone, RouteFees, VehicleRoute } = req.body

    try {
            await Transportations.findByIdAndUpdate(
                { _id },
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
        res.send({ status: 'error', message: error.message })
    }
})

UpdateTransportation.get('/getTransportationByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await Transportations.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateTransportation.delete('/DeleteTransportation/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await Transportations.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "OK", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateTransportation
