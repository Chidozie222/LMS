// This page handles the routes for Subject

// Subject information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Subject = Router()

// calling the schema
require('../models/Admin/subject')


// setting up the schema for the Subject information backend
const Subjects = mongoose.model('Subject')

// storing subject data in the database
Subject.post('/Subject', async (req, res) => {
    const { subjects, Class, SchoolEmail } = req.body;

    try {
        if (!subjects || subjects.length === 0) {
            res.status(400).send({ message: "Subjects array is empty or not provided" });
        } else {
            // Add SchoolEmail and Class to each subject object
            const updatedSubjects = subjects.map(subject => {
                return { ...subject, SchoolEmail, Class };
            });

            const promises = updatedSubjects.map(subject => {
                return Subjects.findOne({ SchoolEmail: SchoolEmail, SubjectCode: subject.SubjectCode }).then(existingSubject => {
                    if (existingSubject) {
                        throw new Error(`Subject with name ${subject.SubjectCode} already exists`);
                    }
                });
            });

            await Promise.all(promises);

            const result = await Subjects.insertMany(updatedSubjects);
            res.send({ status: 'ok', message: 'Subjects successfully uploaded', data: result });
        }
    } catch (error) {
        res.send({ status: 'error', message: error.message });
        console.log(error);
    }
});

module.exports = Subject