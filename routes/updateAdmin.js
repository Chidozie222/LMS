// sign up backend code
const { Router } = require("express");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");

const UpdateAdmin = Router();

// declaring the mongoose schema for sign up
require("../models/Admin/auth");

// calling and setting up the mongoose schema
const Auth = mongoose.model("Auth");

// initialing the setting for the photo or school logo

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

UpdateAdmin.use(express.static("public"));

UpdateAdmin.put('/UpdateAdmin/:id', upload.single('SchoolLogo'), async (req, res) => {
    const { adminName, SchoolName, SchoolPhone, SchoolAddress, SchoolCity, SchoolState, SchoolCountry, SchoolWebsite, Password } = req.body

    let _id = req.params.id;

    try {
        let SchoolLogo;
        let SL;
        let MaxFileSize;

        if (req.file) {
            SchoolLogo = req.file.filename;

            SL = req.file.size;

            MaxFileSize = 3 * 1024 * 1024 * 1024
        }


        if (!req.file) {
            await Auth.findByIdAndUpdate(
              { _id },
              {
                $set: {
                  adminName,
                  SchoolName,
                  SchoolPhone,
                  SchoolAddress,
                  SchoolCity,
                  SchoolState,
                  SchoolCountry,
                  SchoolWebsite,
                  Password,
                },
              }
            );
            res
              .status(200)
              .send({ message: `Admin data has been uploaded successfully` });
        } else if (MaxFileSize > SL) {
            res.send({
              message: "The pictures is greater than 3mb, please reduce it",
            });
        } else {
            await Auth.findByIdAndUpdate(
              { _id },
              {
                $set: {
                      adminName,
                      SchoolName,
                      SchoolPhone,
                      SchoolAddress,
                      SchoolCity,
                      SchoolState,
                      SchoolCountry,
                      SchoolWebsite,
                      SchoolLogo,
                      Password,
                },
              }
            );
            res
              .status(200)
              .send({ message: `Admin data has been uploaded successfully` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})


module.exports = UpdateAdmin