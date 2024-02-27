const { Router } = require('express');
const mongoose = require('mongoose');


const getAllUsers = Router()


require('../models/Admin/auth')
const Auth = mongoose.model('Auth')
require('../models/Admin/teacher')
const Teachers = mongoose.model('Teachers')
require('../models/Admin/student')
const SAPI = mongoose.model('SAPI')
require('../models/Admin/Parent')
const parentModel = mongoose.model('Parent') 

getAllUsers.get('/getAllUsers/:SchoolEmail', async (req, res) => {
    const SchoolEmail = req.params.SchoolEmail

    try {
        if (!SchoolEmail) {
            res.status(400).send({ message: 'School email is not defined' })
        } else {
            let firstArray = await Auth.find({ SchoolEmail })
            let SecondArray = await Teachers.find({ SchoolEmail })
            let thirdArray = await SAPI.find({ SchoolEmail })
            let forthArray = await parentModel.find({ SchoolEmail })
            const mergedArray = [...firstArray, ...SecondArray, ...thirdArray, ...forthArray]
            res.status(200).send({ data: mergedArray })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


module.exports = getAllUsers