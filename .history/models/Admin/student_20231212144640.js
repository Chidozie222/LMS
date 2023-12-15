const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        StudentPicture: String,
        StudentMale: Boolean,
        St
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)