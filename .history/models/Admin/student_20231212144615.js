const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        StudentPicture: String,

    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)