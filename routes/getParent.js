const { Router } = require("express");
const mongoose = require("mongoose")

let getParent = Router()

// calling the schema 
require('../models/Admin/Parent')

// setting up the schema for the Student and Parent information backend
const Parent = mongoose.model('Parent')

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

getParent.get('/getParent/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await Parent.find({ SchoolEmail })

        if (user && user.length > 0) {
            let promises = user.map(async(studentDetails) => {
                const { _id } = studentDetails
                let student = []
                await SAPI.find({ ParentID: _id }).then(result => {
                    result.map(async (studentId) => {
                        const { _id } = studentId
                        student.push(_id)
                     })
                })
                return  { ...studentDetails._doc, student: [...student] }
            })
            
            let result = await Promise.all(promises)

            res.send({status: 'ok', data: result})
        } else {
            res.send({status: 'pending', message: 'No data found', data: []})
        }
    } catch (error) {
        res.send({statue: 'error', message: error.message})
    }
})

module.exports = getParent