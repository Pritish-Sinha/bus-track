const jwt = require('jsonwebtoken');

// General Authentication Middleware (for any logged-in user)
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attaching decoded token data to request object
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Admin-specific middleware for route protection
const verifyAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if the role is admin
        if (decoded.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied, admin-only resource' });
        }

        req.admin = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = {
    authMiddleware,
    verifyAdmin
};
