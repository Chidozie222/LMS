const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        SchoolName: { type: String, require: true },
        SchoolPhone: { type: Number, require: true },
        SchoolEmail: { type: String, require: true },
        SchoolAddress: { type: String,  require: true },
        SchoolCity: { type: String, require: true },
        SchoolState: { type: String, require: true },
        SchoolCountry: { type: String, require: true },
        SchoolWebsite: { type: String, require: true },
        SchoolLogo: { type: String, require: true },
        Password: { type: String, require: true },
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)