import React, { useState, useEffect } from 'react';
import { getUserBookings } from '../services/api';

const UserDashboard = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        async function fetchBookings() {
            const data = await getUserBookings();
            setBookings(data);
        }
        fetchBookings();
    }, []);

    return (
        <div className="user-dashboard">
            <h2>Your Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.pickup} to {booking.destination} - Status: {booking.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
