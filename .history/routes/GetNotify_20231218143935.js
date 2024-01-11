
// This page handles the routes for Notify

// Notify information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const GetNotify = Router()

// calling the schema 
require('../models/Admin/Notify')

// setting up the schema for the Notify information backend
const Notifies = mongoose.model('Notify')

GetNotify.get('/GetNotify/:SchoolEmail', async (req, res) => {
    const SchoolEmail = req.params.SchoolEmail
    try
})