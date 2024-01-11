// This page handles the routes for Subject Mark Field

// Subject Mark Field information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const SMF = Router()

// calling the schema 
require('../models/Admin/SubjectMarkField')

// setting up the schema for the Class information backend
const Classes = mongoose.model('SubjectMarkField')