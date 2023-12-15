// This page handles the routes for Examination

// Examination information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Examination = Router()

// calling the schema 
require('../models/Admin/')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')