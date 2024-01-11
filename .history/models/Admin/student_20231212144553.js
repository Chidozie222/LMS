const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        Studentpicture: String,
        
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)