const { Router } = require("express");
const mongoose = require("mongoose")


const signin = Router()

// declaring the mongoose schema for sign up
require('../models/Admin/auth')

// calling and setting up the mongoose schema
const Auth = mongoose.model('Auth')

signin.post('/signin', async(req, res))