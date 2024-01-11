const mongoose = require('mongoose')


const Teachers = new mongoose.Schema(
    {
        TeacherPicture: String,
        TeacherMale: String,
        TeacherFemale: String,
        TeacherOther: String,
        TeacherFirstName: String,
        TeacherMiddleName: String,
        TeacherLastName: String,
        TeacherDoB: Date,
        TeacherBloodGroup: String,
        TeacherPhoneNumber: Number,
        TeacherQulification: String,
        TeacherAddress: String,
        TeacherCity: String,
        TeacherCountry: String,
        TeacherZipCode: Number,
        TeacherEmail: String,
        TeacherUsername: String,
        TeacherPassword: String,
        TeacherJoiningDate: { type: Date, default: Date.now },
        TeacherLeavingDate: Date,
        TeacherCurrentPosition: String,
        TeacherEmployeeCode: String,
        TeacherWorkingHours: String,
        SchoolEmail: String,
    },
    {
        collection: "TeacherInformation"
    }
)


mongoose.model("Teachers", Teachers)