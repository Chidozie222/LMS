const { Router } = require('express')
const mongoose = require('mongoose');


const generalSignIn = Router()

// declaring the mongoose schema for sign up
require('../models/Admin/auth')

// calling and setting up the mongoose schema
const Auth = mongoose.model('Auth')

// calling the schema 
require('../models/Admin/teacher')

// setting up the schema for the Student and Parent information backend
const Teachers = mongoose.model('Teachers')


// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')


require('../models/Admin/Parent')

const parentModel = mongoose.model('Parent') 

generalSignIn.post('/GeneralSignIn', async(req, res) => {
    const { Email, password } = req.body

    try {
        let SchoolEmail = Email;
        let TeacherEmail = Email;
        let ParentEmail = Email;
        let StudentEmail = Email;
        let Password = password;
        let TeacherPassword = password;
        let ParentPassword = password;
        let StudentPassword = password

        // checking if the email exists
        let adminEmail = await Auth.findOne({ SchoolEmail })
        let teacherEmail = await Teachers.findOne({ TeacherEmail }) 
        let parentEmail = await parentModel.findOne({ ParentEmail })
        let studentEmail = await SAPI.findOne({ StudentEmail })


        // Checking for if they are valid 
        if (adminEmail && adminEmail.Password === Password) {
            res.send({ status: 'ok', message: 'you have successfully logged in', data: adminEmail, Role: "admin" })
        } else if (teacherEmail && teacherEmail.TeacherPassword === TeacherPassword) {
            res.send({ status: 'ok', message: 'you have successfully logged in', data: teacherEmail, Role: "teacher" })
        } else if (parentEmail && parentEmail.ParentPassword === ParentPassword) {
            res.send({ status: 'ok', message: 'you have successfully logged in', data: parentEmail, Role: "parent" })
        } else if (studentEmail && studentEmail.StudentPassword === StudentPassword) {
            res.send({ status: 'ok', message: 'you have successfully logged in', data: studentEmail, Role: "student" })
        } else {
            res.send({ status: 'error', message: 'Email or password in incorrect' })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})


module.exports = generalSignIn