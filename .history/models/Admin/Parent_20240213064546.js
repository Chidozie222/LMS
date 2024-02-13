const mongoose = require('mongoose')


const SAPI = new mongoose.Schema(
    {
        ParentPicture: String,
        ParentGender: String,
        ParentFirstName: String,
        ParentMiddleName: String,
        ParentLastName: String,
        ParentUserName: String,
        ParentPassword: String,
        ParentBloodGroup: String,
        ParentEmail: String,
        ParentPhone: Number,
        ParentEducation: String,
        ParentProfession: String,
        StudentEmail: String,
        StudentUsername: String,
        StudentPassword: String,
        StudentJoiningDate: { type: Date, default: Date.now },
        Class: String,
        RollNumber: Number,
        SchoolEmail: String,
    },
    {
        collection: "StudentAndParentInformation"
    }
)


mongoose.model("SAPI", SAPI)
