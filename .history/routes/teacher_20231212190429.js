// This page handles the routes for Teacher

// Teacher information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const Teacher = Router()

// calling the schema 
require('../models/Admin/teacher')

// setting up the schema for the Student and Parent information backend
const Teachers = mongoose.model('Teachers')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

Sapi.use(express.static('public'))
