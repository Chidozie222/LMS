// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')