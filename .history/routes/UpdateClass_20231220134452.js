// This page handles the routes for Class

// Class information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateClass = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')

UpdateClass.post('/UpdateClass', async (req, res) => {
    const { Class, ClassNumber, ClassCapacity, ClassTeacher, ClassStartingOn, ClassEndingOn, ClassLocation, ClassFeeType, SchoolEmail } = req.body
    try {
        await Classes.updateOne(
            { SchoolEmail, Class },
            {
                $set
            }
            )
            res.send({ status: 'ok', message: 'Class successfully created' })
        
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})

module.exports = UpdateClass
