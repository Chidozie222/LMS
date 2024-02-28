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
StudentMark.post('/StudentMark', async (req, res) => {
  const { Class, Examination, Subject, SchoolEmail, Grade, Remark } = req.body;

  try {
    if (!Class || !Examination || !Subject || !SchoolEmail || !Grade || !Remark) {
      res.status(400).send({ message: `Some or all the value are missing` });
    } else {
      const transformedStudentMarks = [];
      Grade.forEach((grade) => {
        const { studentId, Value } = grade;
        const remarkValue = Remark.find((remark) => remark.studentId === studentId)?.Value || '';

        transformedStudentMarks.push({
          Class,
          Examination,
          Subject,
          Grade: [{ studentId, Value }],
          Remark: [{ studentId, Value: remarkValue }],
          SchoolEmail,
        });
      });

      const uniqueStudentMarks = [];
      for (const studentMark of transformedStudentMarks) {
        const existingStudentMark = await StudentMarks.findOne({ SchoolEmail: studentMark.SchoolEmail, Class: studentMark.Class, Examination: studentMark.Examination, Subject: studentMark.Subject, studentid: studentMark.Grade[0].studentId }).exec();
        if (existingStudentMark) {
          throw new Error(`Student Grade already exist`);
        }
        uniqueStudentMarks.push(studentMark);
      }

      const result = await StudentMarks.insertMany(uniqueStudentMarks);
      res.send({ status: 'ok', message: 'data uploaded successfully', data: result });
    }
  } catch (error) {
    res.send({ status: 'error', message: error.message });
  }
});

module.exports = StudentMark