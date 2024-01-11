const mongoose = require('mongoose')


const Teachers = new mongoose.Schema(
    {
        StudentPicture: String,
        StudentMale: Boolean,
        StudentFemale: Boolean,
        StudentOther: Boolean,
        StudentFirstName: String,
        StudentMiddleName: String,
        StudentLastName: String,
        StudentDoB: Date,
        StudentBloodGroup: String,
        StudentPhoneNumber: Number,
        StudentQulification: String,
        StudentAddress: String,
        StudentCity: String,
        StudentCountry: String,
        StudentZipCode: Number,
        StudentEmail: String,
        StudentUsername: String,
        StudentPassword: String,
        StudentJoiningDate: { type: Date, default: Date.now },
        StudentLeavingDate: Date,
        Student
        SchoolEmail: String,
    },
    {
        collection: "StudentAndParentInformation"
    }
)


mongoose.model("Teachers", Teachers)