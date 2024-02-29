// This page handles the routes for Attendance

// Attendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Attendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the Attendance information backend
const Attendances = mongoose.model('Attendance')



Attendance.post('/Attendance', async (req, res) => {
    const { Class, Date, Attendance, SchoolEmail } = req.body
    
    try {
        if (!Class && !Date && !Attendance && !SchoolEmail) {
            res.status(400).send({ message: `Some or all the value are missing` });
        } else {
            const arrayForAttendance = new Array();
            if (Attendance.absent.length > 0) {
                Attendance.absent.forEach(element => {
                    const { studentId, reason } = element
                    arrayForAttendance.push({
                        Class,
                        Date,
                        Attendance: { absent: [{ studentId, reason }] },
                        SchoolEmail,
                    })
                });
            };

            if (Attendance.present.length > 0) {
                Attendance.present.forEach((id) => { 
                    const { studentId, reason } = id

                    arrayForAttendance.push({
                        Class,
                        Date,
                        Attendance: { present: [{ studentId, reason }] },
                        SchoolEmail
                    })
                })
            };


            const uniqueAttendance = new Array();
            for (const attendances of arrayForAttendance) {
                let existingAttendance;
                if (attendances.Attendance.absent === undefined) {
                    existingAttendance = await Attendances.findOne({ SchoolEmail: attendances.SchoolEmail, Class: attendances.Class, studentId: attendances.Attendance.present[0].studentId }).exec();
                    if (existingAttendance) {
                        throw new Error('sorry attendance for this student has already been taken')
                    }
                uniqueAttendance.push(attendances)
                } else if (attendances.Attendance.present === undefined) {
                    existingAttendance = await Attendances.findOne({ SchoolEmail: attendances.SchoolEmail, Class: attendances.Class, studentId: attendances.Attendance.absent[0].studentId }).exec();
                    if (existingAttendance) {
                        throw new Error('sorry attendance for this student has already been taken')
                    }
                uniqueAttendance.push(attendances)
                }
            }

            const result = await Attendances.insertMany(uniqueAttendance);
            res.send({ status: 'ok', message: 'Attendance has been taken', data: result })
        }
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})


module.exports = Attendance
