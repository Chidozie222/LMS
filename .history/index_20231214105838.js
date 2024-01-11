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
const Subjec
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