const { Router } = require("express");
const mongoose = require("mongoose")

let studentParentID = Router()

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

studentParentID.get('/studentParentID/:_id', async (req, res) => {
    try {
        let ParentID = req.params._id

        let user = await SAPI.find({ ParentID })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found', data: []})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = studentParentID