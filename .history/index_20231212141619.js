// setting up models 
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const home = require('./routes/home')
const signup = require('./routes/signup')
const si
require('dotenv').config()

// initialing the express app
const app = express()

// initialing the middleware for the frontend 
app.use(cors())

// getting routes
app.use(home)
app.use(signup)

// connection to the database configuration 
mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true
})
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