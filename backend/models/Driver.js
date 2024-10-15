const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    location: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Driver', driverSchema);
