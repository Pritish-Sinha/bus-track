import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;  // Backend API URL from .env

// Admin APIs
export const getDrivers = async () => {
    const response = await axios.get(`${API_URL}/admin/drivers`);
    return response.data;
};

export const getBookings = async () => {
    const response = await axios.get(`${API_URL}/admin/bookings`);
    return response.data;
};

export const getVehicles = async () => {
    const response = await axios.get(`${API_URL}/admin/vehicles`);
    return response.data;
};

export const addDriver = async (driver) => {
    await axios.post(`${API_URL}/admin/drivers`, driver);
};

export const addVehicle = async (vehicle) => {
    await axios.post(`${API_URL}/admin/vehicles`, vehicle);
};

// User APIs
export const getUserBookings = async () => {
    const response = await axios.get(`${API_URL}/user/bookings`);
    return response.data;
};

export const createBooking = async (bookingDetails) => {
    await axios.post(`${API_URL}/user/bookings`, bookingDetails);
};

export const registerUser = async (userDetails) => {
    await axios.post(`${API_URL}/auth/register`, userDetails);
};

// Driver APIs
export const getDriverTrips = async () => {
    const response = await axios.get(`${API_URL}/driver/trips`);
    return response.data;
};

export const getDriverAnalytics = async () => {
    const response = await axios.get(`${API_URL}/admin/driver-analytics`);
    return response.data;
};

// Progress Update API
export const getProgress = async (bookingId) => {
    const response = await axios.get(`${API_URL}/user/bookings/${bookingId}/progress`);
    return response.data;
};
