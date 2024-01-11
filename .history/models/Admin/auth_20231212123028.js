const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        SchoolName: { type: String, unique: true, require: true },
        SchoolPhone: { type: Number, unique: true, require: true },
        SchoolEmail: { type: String, unique: true, require: true },
        SchoolAddress: { type: String, unique: true, require: true },
        SchoolCity: { type: String, unique: true, require: true },
        School
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model(Auth, "Auth")