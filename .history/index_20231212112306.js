const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(cors())

mongoose.connect(process.env.mongoUrl)
    .then(() => {
    console.log('connected to database');
    }) 
    .catch((Error) => {
        console.log(Error);
    })
    



app.listen(process.env.PORT, (err, res) => {
    console.log(`This server is running on port: $`)
})
