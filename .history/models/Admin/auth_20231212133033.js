const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        SchoolName:  String, 
        SchoolPhone:  Number, 
        SchoolEmail:  String, 
        SchoolAddress:  String, 
        SchoolCity:  String, 
        SchoolState:  String, 
        SchoolCountry:  String, 
        SchoolWebsite:  String, 
        SchoolLogo:  String, 
        Password:  String, require: true }
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model(Auth, "Auth")