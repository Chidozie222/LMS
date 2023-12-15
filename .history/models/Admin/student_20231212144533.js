const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        Studentpicture: {type: }
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)