// This page handles the routes for Teacher

// Teacher information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetTeacher = Router()

// calling the schema 
require('../models/Admin/teacher')

// setting up the schema for the Teacher information backend
const Teachers = mongoose.model('Teachers')


// get teacher data
GetTeacher.get('/getTeacher/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await Teachers.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found', data: []})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = GetTeacher