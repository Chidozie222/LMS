const { Router } = require("express");
const mongoose = require("mongoose")

let getParentID = Router()

require('../models/Admin/Parent')

const parentModel = mongoose.model('Parent')


getParentID.get('/getParentID/:_id', async (req, res) => {
    try {
        let id = req.params._id

        let user = await parentModel.findById({ _id: id })

        if (user) {
            res.send({status: 'ok', data: user})
        } else {
            res.send({status: 'pending', message: 'No data found', data: []})
        }
    } catch (error) {
        res.send({statue: 'error', message: 'error in the server'})
    }
})

module.exports = getParentID