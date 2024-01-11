
// This page handles the routes for Notify

// Notify information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Notify = Router()

// calling the schema 
require('../models/Admin/Notify')

// setting up the schema for the Notify information backend
const Events = mongoose.model('Notify')
