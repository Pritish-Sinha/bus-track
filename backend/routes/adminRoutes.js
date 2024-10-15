const express = require('express');
const adminController = require('../controllers/adminController');
const { verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', adminController.loginAdmin);
router.get('/dashboard', verifyAdmin, adminController.getAdminDashboard);
router.post('/addDriver', verifyAdmin, adminController.addDriver);
router.post('/addVehicle', verifyAdmin, adminController.addVehicle); // Assuming addVehicle exists
// Add more admin routes as needed...

module.exports = router;
