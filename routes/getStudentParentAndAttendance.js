const { Router } = require("express");
const mongoose = require("mongoose");


const getStudentParentAndAttendance = Router()


require('../models/Admin/Parent')

const parentModel = mongoose.model('Parent')

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the Attendance information backend
const Attendances = mongoose.model('Attendance')

getStudentParentAndAttendance.get("/getStudentParentAndAttendance/:id", async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).json({ message: "Please provide a valid student ID." })
        } else {
            const promises = async () => {
                let attendance = {
                    present: 0,
                    absent: 0,
                }
                let studentInfo = await SAPI.findById(id);
                let parentID = studentInfo.ParentID
                let parentInfo = await parentModel.findById({ _id: parentID })
                let attendanceInfo = await Attendances.find({ studentId: id })
                if (attendanceInfo && attendanceInfo.length > 0) {
                    for (let i = 0; i < attendanceInfo; i++) { 
                    let present = 0
                    let absent = 0
                    if (attendanceInfo[i].Attendance.present === undefined) {
                        absent++
                    } else if (attendanceInfo[i].Attendance.absent === undefined) {
                        present++
                    }
                    attendance.present = present;
                    attendance.absent = absent;
                    }
                    return { ...studentInfo, ...parentInfo, "attendanceInformation": attendanceInfo, ...attendance }
                } else {
                    throw new Error({message: 'No attendance data found.'})
                }
            }

            let result = await Promise.all(promises())
            res.status(200).send({ status: 'ok', data: result })
        }
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
})


module.exports = getStudentParentAndAttendance