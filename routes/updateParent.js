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


updateParent.post('/updateParent', upload.single('ParentPicture'), async (req, res) => {
    const { ParentGender, ParentFirstName, ParentMiddleName, ParentLastName, _id, ParentPassword, ParentBloodGroup, ParentPhone, ParentEducation, ParentProfession } = req.body;

    let ParentPicture = req.file.filename;

    let PP = req.file.size


    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {

        if (!req.file) {
            await parentModel.findByIdAndUpdate(
                { _id },
                {
                    $set:
                    {
                        ParentGender, ParentFirstName, ParentMiddleName, ParentLastName, ParentPassword, ParentBloodGroup, ParentPhone, ParentEducation, ParentProfession
                    }
                }
            )
            res.status(200).send({ message: `Parent data has been uploaded successfully` })
        } else if (MaxFileSize < PP) {
            res.send({ message: 'The pictures is greater than 3mb, please reduce it' })
        } else {
            await parentModel.findByIdAndUpdate(
                { _id },
                {
                    $set:
                    {
                        ParentPicture,
                        ParentGender, ParentFirstName, ParentMiddleName, ParentLastName, ParentPassword, ParentBloodGroup, ParentPhone, ParentEducation, ParentProfession
                    }
                }
            )
            res.status(200).send({ message: `Parent data has been uploaded successfully` })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

updateParent.get('/getParentByID/:id', async (req, res) => {
    let id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            let user = await parentModel.findById({ _id: id })
            res.status(200).send({ data: user })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

updateParent.delete('/DeleteParent/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: `I did not get any ID` })
        } else {
            await parentModel.findByIdAndDelete({ _id: id })
        }
        res.send({ status: "OK", message: 'Delete Successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = updateParent