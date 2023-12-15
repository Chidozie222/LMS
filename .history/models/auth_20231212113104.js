const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        UserName: {type: String, unique: true, required: }
    }
)