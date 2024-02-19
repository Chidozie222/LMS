const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const updateParent = Router()


require('../models/Admin/Parent')

const parentModel = mongoose.model('Parent')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

updateParent.use(express.static('public'))


updateParent.post('updateParent', upload.single('ParentPicture'), async (req, res) => {
    const { ParentGender, ParentFirstName, ParentMiddleName, ParentLastName, ParentUserName, ParentPassword, ParentBloodGroup, ParentPhone, ParentEducation, ParentProfession, Role, SchoolEmail } = req.body;

    let ParentPicture = req.file.filename;

    let PP = req.file.size


    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {

        if (!req.file) {
            res.status(400).send({ message: "image not found" })
        } else if (MaxFileSize < PP) {
            res.send({ message: 'The pictures is greater than 3mb, please reduce it' })
        } else {
            await parentModel.findOneAndUpdate(
                { SchoolEmail, ParentUserName },
                {
                    $set:
                    {
                        ParentPicture,
                        ParentGender, ParentFirstName, ParentMiddleName, ParentLastName, ParentPassword, ParentBloodGroup, ParentPhone, ParentEducation, ParentProfession, Role, SchoolEmail
                    }
                }
            )
            res.status(200).send({ message: `Parent data has been uploaded successfully` })
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' })
    }
})

module.exports = updateParent