const mongoose = require('mongoose')

const Transportation = new mongoose.Schema(
    {
        VehicleName: String,
        VehicleNumber: Number,
        DriverName: String,
        DriverPhone: Number,
        RouteFees: String,
        Vec
    }
)