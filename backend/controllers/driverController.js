const Driver = require('../models/Driver');
const Booking = require('../models/Booking');

// Get available drivers based on proximity or other filters
exports.getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find({ available: true });
        res.status(200).json({ drivers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching drivers', error });
    }
};

// Assign a driver to a booking
exports.assignDriver = async (req, res) => {
    const { bookingId, driverId } = req.body;

    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const driver = await Driver.findById(driverId);
        if (!driver || !driver.available) {
            return res.status(404).json({ message: 'Driver not found or not available' });
        }

        booking.driverId = driverId;
        driver.available = false;

        await booking.save();
        await driver.save();

        res.status(200).json({ message: 'Driver assigned successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning driver', error });
    }
};
