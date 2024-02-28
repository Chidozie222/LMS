// This page handles the routes for Student Mark

// Student Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')



// routes for posting the student marks information
StudentMark.post('/StudentMark', async(req, res) => {
    const { Class, Examination, Subject, StudentMark, SchoolEmail } = req.body;

    try {
        if (!Class && !Examination && !Subject && !StudentMark && StudentMark.length === 0) {
            res.status(400).send({ message: `Some or all the value are missing` })
        } else {
            const addValuesToStudentMarkArray = StudentMark.map(studentMarks => {
                return { ...studentMarks, SchoolEmail, Class, Examination, Subject }
            })
            const newStudentMark = addValuesToStudentMarkArray.map(studentMark => {
                return StudentMarks.findOne({ SchoolEmail, Class, Examination, Subject, StudentID: studentMark.StudentID }).then(existingStudentMark => {
                    if (existingStudentMark) {
                        throw new Error(`This student ${studentMark.StudentFirstName} ${studentMark.StudentLastName} grade already exist, please if you want to make any change  then update`);
                    }
                    
                })
            })

            await Promise.all(newStudentMark)
            const result = await StudentMarks.insertMany(addValuesToStudentMarkArray)
            res.send({ status: 'ok', message: 'data uploaded successfully', data: result })
        }
            
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

module.exports = StudentMark
