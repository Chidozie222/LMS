const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        UserName: {type: String, unique: true, require: true}
    },
    {
        collection: "Admin_User"
    }
)


mon