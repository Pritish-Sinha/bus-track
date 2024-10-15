const axios = require('axios');

// Function to calculate distance between pickup and dropoff locations using Google Maps API
exports.calculateDistance = async (pickupLocation, dropoffLocation) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
            params: {
                origins: pickupLocation,
                destinations: dropoffLocation,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });

        const distance = response.data.rows[0].elements[0].distance.value; // in meters
        return distance / 1000; // Convert to kilometers
    } catch (error) {
        console.error('Error fetching distance from Google Maps:', error.message);
        throw new Error('Unable to calculate distance at the moment');
    }
};
