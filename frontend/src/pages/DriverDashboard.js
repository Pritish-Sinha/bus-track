import React, { useState, useEffect } from 'react';
import { getDriverTrips } from '../services/api';

const DriverDashboard = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function fetchTrips() {
            const data = await getDriverTrips();
            setTrips(data);
        }
        fetchTrips();
    }, []);

    return (
        <div className="driver-dashboard">
            <h2>Your Assigned Trips</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        {trip.pickup} to {trip.destination} - Status: {trip.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriverDashboard;
