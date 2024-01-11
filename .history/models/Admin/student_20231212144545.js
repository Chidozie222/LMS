const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        Studentpicture: Str
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)