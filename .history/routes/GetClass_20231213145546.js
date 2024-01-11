// This page handles the routes for Class

// Class information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const GetClass = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')


// get Class data
GetClass.get('/GetClass/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await Teachers.find({ SchoolEmail })

        if (user && user.length > 0) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found'})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})