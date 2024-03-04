// This page handles the routes for Class

// Class information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')
const GetClass = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Class')

require('../models/Admin/teacher')

// setting up the schema for the Student and Parent information backend
const Teachers = mongoose.model('Teachers')


// get Class data
GetClass.get('/getClass/:SchoolEmail', async (req, res) => {
    try {
        let SchoolEmail = req.params.SchoolEmail

        let user = await Classes.find({ SchoolEmail })

        if (user && user.length > 0) {
            let result = []
            user.forEach(async(classTeacherNameAndId) => {
                const { ClassTeacher } = classTeacherNameAndId
                let teacherInfo = await Teachers.findById(ClassTeacher).select(['TeacherFirstName', 'TeacherLastName'])
                result.push({ ...classTeacherNameAndId, "ClassTeacherInfo": teacherInfo })
            })
            res.send({status: 'ok', data: result})
        } else {
            res.send({status: 'pending', message: 'No data found', data: []})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})
module.exports = GetClass