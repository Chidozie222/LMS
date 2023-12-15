const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        SchoolName: { type: String, unique: true, require: true },
        Phone: { type: Number, unique: true, require: true },
        SchoolEmail: {type: String, unique}
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model(Auth, "Auth")