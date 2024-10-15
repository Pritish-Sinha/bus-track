const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware.verifyUser, userController.getUserProfile);
router.put('/profile', authMiddleware.verifyUser, userController.updateUserProfile);
router.get('/bookings', authMiddleware.verifyUser, userController.getUserBookings);

module.exports = router;
