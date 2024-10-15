const Booking = require('../models/Booking');
const surgePricing = require('../services/surgePricing');
const googleMaps = require('../config/googleMaps');

// Create a new booking
exports.createBooking = async (req, res) => {
    const { userId, vehicleType, pickupLocation, dropoffLocation, pickupTime } = req.body;

    try {
        const basePrice = getBasePrice(vehicleType);
        const distance = await googleMaps.calculateDistance(pickupLocation, dropoffLocation);
        let price = basePrice + (distance * getPerKmRate(vehicleType));

        // Apply surge pricing
        const surgeMultiplier = await surgePricing.calculateSurgeMultiplier(pickupTime, pickupLocation);
        price *= surgeMultiplier;

        const newBooking = new Booking({
            userId,
            vehicleType,
            pickupLocation,
            dropoffLocation,
            pickupTime,
            price,
            distance
        });

        await newBooking.save();
        res.status(201).json({ booking: newBooking, price, surgeMultiplier });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

// Helper functions for base fare and per km rate
function getBasePrice(vehicleType) {
    switch (vehicleType) {
        case 'Two-Wheeler':
            return 40; // Avg of ₹30 - ₹50
        case 'Mini Truck':
            return 200; // Avg of ₹150 - ₹250
        case 'Truck':
            return 600; // Avg of ₹500 - ₹700
        default:
            throw new Error('Invalid vehicle type');
    }
}

function getPerKmRate(vehicleType) {
    switch (vehicleType) {
        case 'Two-Wheeler':
            return 8; // Avg of ₹6 - ₹10/km
        case 'Mini Truck':
            return 25; // Avg of ₹20 - ₹30/km
        case 'Truck':
            return 42; // Avg of ₹35 - ₹50/km
        default:
            throw new Error('Invalid vehicle type');
    }
}
