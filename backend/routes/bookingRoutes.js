const express = require('express');
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware.verifyUser, bookingController.createBooking);
router.get('/:bookingId', authMiddleware.verifyUser, bookingController.getBookingDetails);
router.post('/:bookingId/cancel', authMiddleware.verifyUser, bookingController.cancelBooking);
router.get('/user/:userId', authMiddleware.verifyUser, bookingController.getUserBookings);

module.exports = router;
