// This page handles the routes for Event

// Attendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Event = Router()

// calling the schema 
require('../models/Admin/Event')

// setting up the schema for the Event information backend
const Attendances = mongoose.model('Event')
