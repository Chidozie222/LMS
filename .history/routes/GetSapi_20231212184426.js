const { Router } = require("express");
const mongoose = require("mongoose")

let GetSapi = Router()

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

GetSapi.get('/GetSapi/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await SAPI.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send(status = )
        } else {
            
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})