const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        Studentpicture: {}
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)