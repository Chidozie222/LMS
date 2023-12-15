// setting up models 
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// initialing 
const app = express()

app.use(cors())

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
