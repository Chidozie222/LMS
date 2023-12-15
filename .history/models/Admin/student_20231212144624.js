const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        StudentPicture: String,
        Student
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)