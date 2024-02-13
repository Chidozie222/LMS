const mongoose = require('mongoose')


const Parent = new mongoose.Schema(
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
        Class: String,
        Role: String,
        SchoolEmail: String,
    },
    {
        collection: "Parent"
    }
)


mongoose.model("Parent", Parent)
