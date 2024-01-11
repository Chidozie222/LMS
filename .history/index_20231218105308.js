// setting up models 
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const home = require('./routes/home')
const signup = require('./routes/signup')
const signin = require('./routes/signin')
const Sapi = require('./routes/Sapi')
const GetSapi = require('./routes/GetSapi')
const Teacher = require('./routes/teacher')
const GetTeacher = require('./routes/GetTeacher')
const Class = require('./routes/Class')
const GetClass = require('./routes/GetClass')
const Subject = require('./routes/Subject')
const GetSubject = require('./routes/GetSubject')
const SMF = require('./routes/SMF')
const GetSMF = require('./routes/GetSMF')
const StudentMark = require('./routes/StudentMark')
const GetStudentMark = require('./routes/GetStudentMark')
const Examination = require('./routes/Examination')
const GetExamination = require('./routes/GetExamination')
const Attendance = require('./routes/Attendance')
const GetAttendance = require('./routes/')
require('dotenv').config()

// initialing the express app
const app = express()
app.use(express.json())

// initialing the middleware for the frontend 
app.use(cors())

// getting routes
app.use(home)
app.use(signup)
app.use(signin)
app.use(Sapi)
app.use(GetSapi)
app.use(Teacher)
app.use(GetTeacher)
app.use(Class)
app.use(GetClass)
app.use(Subject)
app.use(GetSubject)
app.use(SMF)
app.use(GetSMF)
app.use(StudentMark)
app.use(GetStudentMark)
app.use(Examination)
app.use(GetExamination)
app.use(Attendance)
// connection to the database configuration 
mongoose.connect(process.env.mongoUrl)
    .then(() => {
    console.log('connected to database');
    }) 
    .catch((err) => {
        console.log(err);
    })
    


// Port listener 
app.listen(process.env.PORT, (err, res) => {
    console.log(`This server is running on port: ${process.env.PORT}`)
})