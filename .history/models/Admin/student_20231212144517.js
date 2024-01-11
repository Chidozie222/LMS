const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        Student
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)