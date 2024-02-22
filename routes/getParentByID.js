const { Router } = require("express");
const mongoose = require("mongoose")

let getParentID = Router()

// calling the schema 
require('../models/Admin/Parent')

// setting up the schema for the Student and Parent information backend
const Parent = mongoose.model('Parent')

getParentID.get('/getParentID/:_id', async (req, res) => {
    try {
        let _id = req.params._id

        let user = await Parent.findOne({ _id })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = getParentID