const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
    },
    vehicleType: {
        type: String,
        enum: ['Two-Wheeler', 'Mini Truck', 'Truck'],
        required: true,
    },
    pickupLocation: {
        type: String,
        required: true,
    },
    dropoffLocation: {
        type: String,
        required: true,
    },
    pickupTime: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Completed', 'Cancelled'],
        default: 'Pending',
    },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
