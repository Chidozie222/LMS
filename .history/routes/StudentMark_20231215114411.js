// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')

// routes for posting the student marks information


StudentMark.post('/StudentMark', async(req, res) => {
    const { Class,  }
})