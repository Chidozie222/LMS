const mongoose = require('mongoose')


const SAPI = new mongoose.Schema(
    {
        StudentPicture: String,
        StudentMale: Str,
        StudentFemale: Str,
        StudentOther: Str,
        StudentFirstName: String,
        StudentMiddleName: String,
        StudentLastName: String,
        StudentDoB: Date,
        StudentBloodGroup: String,
        StudentPhoneNumber: Number,
        StudentAddress: String,
        StudentCity: String,
        StudentCountry: String,
        StudentZipCode: Number,
        ParentPicture: String,
        ParentMale: Str,
        ParentFemale: Str,
        ParentOther: Str,
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