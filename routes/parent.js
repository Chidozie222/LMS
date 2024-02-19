// This page handles the routes for parent and Student

// Student and parent information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const parent = Router()


require('../models/Admin/Parent')

const parentModel = mongoose.model('Parent')

// setting up the multer module for it to accept media files

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

parent.use(express.static('public'))


parent.post('/post_parent', upload.single('ParentPicture'), async (req, res) => {
    const { ParentGender, ParentFirstName, ParentMiddleName, ParentLastName, ParentUserName, ParentPassword, ParentBloodGroup, ParentEmail, ParentPhone, ParentEducation, ParentProfession, Role, SchoolEmail } = req.body;

    let ParentPicture = req.file.filename;

    let PP = req.file.size


    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {
        let userByUserName = await parentModel.findOne({ SchoolEmail, ParentUserName })
        let userByEmail = await parentModel.findOne({ SchoolEmail, ParentEmail })
        let userByPhoneNumber = await parentModel.findOne({ SchoolEmail, ParentPhone })


        if (!req.file) {
            res.status(400).send({ message: "image not found" })
        } else if (MaxFileSize < PP) {
            res.send({ message: 'The pictures is greater than 3mb, please reduce it' })
        } else if (userByUserName && userByEmail && userByPhoneNumber) {
            res.send({ message: `user already exists` })
        } else {
            await parentModel.create({
                ParentPicture,
                ParentGender, 
                ParentFirstName, 
                ParentMiddleName, 
                ParentLastName, 
                ParentUserName, 
                ParentPassword, 
                ParentBloodGroup, 
                ParentEmail, 
                ParentPhone, 
                ParentEducation, 
                ParentProfession, 
                Role,
                SchoolEmail
            })
            res.status(200).send({ message: `Parent data hes been uploaded successfully` })
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' })
    }
})

module.exports = parent