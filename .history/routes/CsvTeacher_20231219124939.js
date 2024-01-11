// getting csv files and storing the data
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');
const csv = require('csvtojson')

const CsvTeacher = Router()

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

CsvTeacher.use(express.static('public'))

    
CsvTeacher.post('/CsvTeacher', upload.single('CsvTeacher'), async (req, res) => {
    let CsvTeacher = req.file.path
    let csvfile = [];
    try {
        if (!req.file) {
            res.send({ status: 'error', message: 'No csv file inputted' })
        } else {
            csv()
            .fromFile(CsvTeacher)
                .then((jsonObj) => {
                    jsonObj.map((item) => {
                        csvfile.push(csvfile)
                    })
                })
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = CsvTeacher