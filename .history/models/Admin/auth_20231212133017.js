const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        SchoolName:  String, require: true },
        SchoolPhone:  Number, require: true },
        SchoolEmail:  String, require: true },
        SchoolAddress:  String, require: true },
        SchoolCity:  String, require: true },
        SchoolState:  String, require: true },
        SchoolCountry:  String, require: true },
        SchoolWebsite:  String, require: true },
        SchoolLogo:  String, require: true },
        Password:  String, require: true }
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model(Auth, "Auth")