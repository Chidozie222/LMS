// This page handles the routes for Teacher

// Class information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const Class = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Student and Parent information backend
const Classes = mongoose.model('Class')

Class.post('/Class', async (req, res) => {
    const { ClassName, ClassNumber, ClassCapacity, ClassCapacity, ClassTeacher, ClassStartingOn, ClassEndingOn, ClassLocatin, ClassFeeType, SchoolEmail } = req.body
    try {
        let User = await Classes.find({ SchoolEmail, ClassName })
        if (User && User.length > 0) {
            res.send({ status: 'error', message: 'Sorry but User already exist' })
        } else {
            await Classes.create({
                ClassName, 
                ClassNumber, 
                ClassCapacity, 
                ClassCapacity, 
                ClassTeacher, 
                ClassStartingOn, 
                ClassEndingOn, 
                ClassLocatin, 
                ClassFeeType, 
                SchoolEmail
            })
            res.send({ status: 'ok', message: 'Class succussfully created' })
        }
        
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})
