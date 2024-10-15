import React, { useState, useEffect } from 'react';
import { getDrivers, getBookings, getVehicles } from '../services/api';

const AdminDashboard = () => {
    const [drivers, setDrivers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const driversData = await getDrivers();
            const bookingsData = await getBookings();
            const vehiclesData = await getVehicles();
            setDrivers(driversData);
            setBookings(bookingsData);
            setVehicles(vehiclesData);
        }
        fetchData();
    }, []);

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="admin-section">
                <h3>Drivers</h3>
                <ul>
                    {drivers.map(driver => (
                        <li key={driver.id}>{driver.name}</li>
                    ))}
                </ul>
            </div>
            <div className="admin-section">
                <h3>Bookings</h3>
                <ul>
                    {bookings.map(booking => (
                        <li key={booking.id}>{booking.details}</li>
                    ))}
                </ul>
            </div>
            <div className="admin-section">
                <h3>Vehicles</h3>
                <ul>
                    {vehicles.map(vehicle => (
                        <li key={vehicle.id}>{vehicle.type}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
