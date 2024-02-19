// This page handles the routes for Class

// Class information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Class = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')

Class.post('/Class', async (req, res) => {
    const { Class, ClassNumber, ClassCapacity, ClassTeacher, ClassStartingOn, ClassEndingOn, ClassLocation, ClassFeeType, SchoolEmail } = req.body
    console.log(Class, ClassNumber, ClassCapacity, ClassTeacher, ClassStartingOn, ClassEndingOn, ClassLocation, ClassFeeType, SchoolEmail);
    try {
        let User = await Classes.find({ SchoolEmail, Class })
        if (!Class && !ClassNumber && !ClassCapacity && !ClassTeacher && !ClassStartingOn && !ClassEndingOn && !ClassLocation && !ClassFeeType && !SchoolEmail) { 
            res.status(400).send({ message: "A value in not present" })
        } else if (User && User.length > 0) {
            res.send({ status: 'error', message: 'Sorry but User already exist' })
        } else {
            await Classes.create({
                Class, 
                ClassNumber, 
                ClassCapacity, 
                ClassTeacher, 
                ClassStartingOn, 
                ClassEndingOn, 
                ClassLocation, 
                ClassFeeType, 
                SchoolEmail
            })
            res.send({ status: 'ok', message: 'Class successfully created' })
        }
        
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})

module.exports = Class
