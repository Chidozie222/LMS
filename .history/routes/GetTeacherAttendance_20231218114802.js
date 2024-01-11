// This page handles the routes for Teacher Attendance

// Teacher TeacherAttendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const getTeacherAttendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the TeacherAttendance information backend
const TeacherAttendances = mongoose.model('TeacherAttendance')

