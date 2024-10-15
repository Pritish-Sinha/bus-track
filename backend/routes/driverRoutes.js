const express = require('express');
const driverController = require('../controllers/driverController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', driverController.loginDriver);
router.get('/dashboard', authMiddleware.verifyDriver, driverController.getDriverDashboard);
router.get('/bookings', authMiddleware.verifyDriver, driverController.getAvailableBookings);
router.post('/bookings/:bookingId/accept', authMiddleware.verifyDriver, driverController.acceptBooking);

module.exports = router;
