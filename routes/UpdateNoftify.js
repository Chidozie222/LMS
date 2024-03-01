
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
    const { _id, Receiver, Description  } = req.body
    
    try {
            await Notifies.findByIdAndUpdate(
                { _id },
                {
                    $set: { 
                        Receiver, 
                        Description
                    }
                }
            )
            res.send({ status: 'ok', message: 'data uploaded successfully' })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

UpdateNotify.get('/getNotifyByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await Notifies.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

UpdateNotify.delete('/DeleteNotify/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await Notifies.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "OK", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = UpdateNotify