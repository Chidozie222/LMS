// This page handles the routes for Examination

// Examination information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Examination = Router()

// calling the schema 
require('../models/Admin/Examination')

// setting up the schema for the Student Mark information backend
const Examinations = mongoose.model('Examination')