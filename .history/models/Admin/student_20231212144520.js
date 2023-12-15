const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        Studentpic
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)