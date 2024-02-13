const mongoose = require('mongoose')


const SAPI = new mongoose.Schema(
    {
        StudentPicture: String,
        StudentGender: String,
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
        StudentEmail: String,
        StudentUsername: String,
        StudentPassword: String,
        StudentJoiningDate: { type: Date, default: Date.now },
        Class: String,
        RollNumber: Number,
        Roll:
        SchoolEmail: String,
    },
    {
        collection: "StudentAndParentInformation"
    }
)


mongoose.model("SAPI", SAPI)
