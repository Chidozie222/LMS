const { Router } = require("express");
const mongoose = require("mongoose")

let getParent = Router()

// calling the schema 
require('../models/Admin/Parent')

// setting up the schema for the Student and Parent information backend
const Parent = mongoose.model('Parent')

getParent.get('/getParent/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await Parent.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = getParent