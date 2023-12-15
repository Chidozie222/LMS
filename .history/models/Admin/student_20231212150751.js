const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
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
        StudentAddress: String,
        StudentCity: String,
        StudentCountry: String,
        StudentZipCode: Number,
        ParentPicture: String,
        ParentMale: Boolean,
        ParentFemale: Boolean,
        ParentOther: Boolean,
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
        collection: "Stu"
    }
)


mongoose.model("Auth", Auth)