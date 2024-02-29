// This page handles the routes for Teacher Attendance

// Teacher TeacherAttendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const TeacherAttendance = Router()

// calling the schema 
require('../models/Admin/TeacherAttendance')

// setting up the schema for the TeacherAttendance information backend
const TeacherAttendances = mongoose.model('TeacherAttendance')



TeacherAttendance.post('/TeacherAttendance', async (req, res) => {
    const { Date, Attendance, SchoolEmail } = req.body;
    
    try {
        if (!Date && !Attendance && !SchoolEmail) {
            res.status(400).send({ message: `Some or all the value are missing` });
        } else {
            const arrayForTeacherAttendance = new Array()
            if (Attendance.absent.length > 0) {
                Attendance.absent.forEach(element => {
                    const { teacherID, reason } = element
                    arrayForTeacherAttendance.push({
                        Date,
                        Attendance: { absent: [{ teacherID, reason }] },
                        SchoolEmail
                    })
                })
            }

            if (Attendance.present.length > 0) {
                Attendance.present.forEach(element => {
                    const { teacherID, reason } = element;
                    arrayForTeacherAttendance.push({
                        Date,
                        Attendance: { present: [{ teacherID, reason }] },
                        SchoolEmail
                    })
                })
            }

            const uniqueTeacherAttendance = new Array();
            for (const teacherAttendances of arrayForTeacherAttendance) {
                let existingTeacherAttendance;
                if (teacherAttendances.Attendance.absent !== undefined) {
                    existingTeacherAttendance = await TeacherAttendances.findOne({ SchoolEmail: teacherAttendances.SchoolEmail, Date: teacherAttendances.Date, teacherID: teacherAttendances.Attendance.absent[0].teacherID }).exec();
                    if (existingTeacherAttendance) {
                        throw new Error('sorry attendance for this student has already been taken')
                    }
                    uniqueTeacherAttendance.push(teacherAttendances)
                } else if (teacherAttendances.Attendance.present  !== undefined) {
                     existingTeacherAttendance = await TeacherAttendances.findOne({ SchoolEmail: teacherAttendances.SchoolEmail, Date: teacherAttendances.Date, teacherID: teacherAttendances.Attendance.present[0].teacherID }).exec();
                    if (existingTeacherAttendance) {
                        throw new Error('sorry attendance for this student has already been taken')
                    }
                    uniqueTeacherAttendance.push(teacherAttendances)
                }
            }

            const result = await TeacherAttendances.insertMany(uniqueTeacherAttendance);
            res.send({ status: 'ok', message: `Teacher Attendance has been taken`, data: result })
        }
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})


module.exports = TeacherAttendance
