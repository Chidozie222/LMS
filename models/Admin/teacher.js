const mongoose = require('mongoose')


const Teachers = new mongoose.Schema(
    {
        TeacherPicture: String,
        TeacherGender: String,
        TeacherFirstName: String,
        TeacherMiddleName: String,
        TeacherLastName: String,
        TeacherDoB: Date,
        TeacherBloodGroup: String,
        TeacherPhoneNumber: Number,
        TeacherQualification: String,
        TeacherAddress: String,
        TeacherCity: String,
        TeacherCountry: String,
        TeacherZipCode: String,
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
