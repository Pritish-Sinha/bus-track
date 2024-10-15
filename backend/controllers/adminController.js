const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin registration
exports.registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ name, email, password: hashedPassword });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering admin', error });
    }
};

// Admin login
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id, role: 'Admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in admin', error });
    }
};

// Function to get admin dashboard data (implement as needed)
exports.getAdminDashboard = async (req, res) => {
    try {
        // Retrieve any required data for the admin dashboard
        res.status(200).json({ message: 'Admin dashboard data' });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving dashboard data', error });
    }
};
