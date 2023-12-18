const mongoose = require('mongoose')

const Transportation = new mongoose.Schema(
    {
        VehicleName: String,
        VehicleNumber: String
    }
)