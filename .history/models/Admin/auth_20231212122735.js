const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        SchoolName: { type: String, unique: true, require: true },
        Phone: { type: Number, unique: true, require: true },
        SchoolEmail: 
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model(Auth, "Auth")