const { Router } = require("express");
const mongoose = require("mongoose")


const AdminUser = Router()

// declaring the mongoose schema
require('../models/Admin/auth')

// calling and setting up the mongoose schema
const Auth = mongoose.model('Auth')

// setting up routes for the admin information to be displayed


AdminUser.get('/AdminUser/:id', async(req, res) => {
    let id = req.params.id
    try {
        let data = await Auth.findById({ _id: id })
        if (id.length < 0) {
            res.send({ status: 'error', message: 'not data found' })
        } else {
            res.send({ status: 'ok', data: data })
        }
    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = AdminUser