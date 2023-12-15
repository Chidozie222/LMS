// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentMArk = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')