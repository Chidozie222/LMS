const { Router } = require("express");
const mongoose = require("mongoose");

const getStudentParentAndAttendance = Router()

require('../models/Admin/Parent')
const parentModel = mongoose.model('Parent')
require('../models/Admin/student')
const SAPI = mongoose.model('SAPI')
require('../models/Admin/Attendance')
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

                let attendanceInfo;
                let studentInfo = await SAPI.findById({ _id: id }); // Added await here
                let parentID = studentInfo.ParentID
                let parentInfo = await parentModel.findById({ _id: parentID })
                attendanceInfo = await Attendances.find({ "Attendance.present": { $elemMatch: { studentId: id } } })
                if (attendanceInfo[0] === undefined) {
                    attendanceInfo = await Attendances.find({ "Attendance.absent": { $elemMatch: { studentId: id } } })
                } 


                if (attendanceInfo && attendanceInfo.length > 0) {
                    let present = 0
                        let absent = 0
                attendanceInfo.forEach(attendanceDoc => {
                        if (attendanceDoc.Attendance.present === undefined) {
                            absent++
                        } else if (attendanceDoc.Attendance.absent === undefined) {
                            present++
                        }
                        attendance.present = present;
                    attendance.absent = absent;
                })
                 const joinedObj = {attendanceDetails: attendanceInfo, ...[studentInfo, parentInfo, attendance]}
                return joinedObj
                } else {
                    throw new Error(`Attendance has not been taken`)
                }
                        
            }
            

            let result = await promises()
            res.status(200).send({ status: 'ok', data: result })
        }
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
})


module.exports = getStudentParentAndAttendance