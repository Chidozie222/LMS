const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        UserName: {type: String, unique: true, require: true, mi}
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model(Auth, "Auth")