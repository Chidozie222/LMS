const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        StudentPicture: String,
        StudentMale: Boolean,
        Student
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)