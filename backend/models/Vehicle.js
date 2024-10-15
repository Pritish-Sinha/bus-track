const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Two-Wheeler', 'Mini Truck', 'Truck'],
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    capacity: {
        type: String,
        required: true,
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
