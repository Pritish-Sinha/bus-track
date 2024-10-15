import React, { useState, useEffect } from 'react';
import { getDriverAnalytics } from '../services/api';

const DriverAnalytics = () => {
    const [analytics, setAnalytics] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const analyticsData = await getDriverAnalytics();
            setAnalytics(analyticsData);
        }
        fetchData();
    }, []);

    return (
        <div className="driver-analytics">
            <h2>Driver Performance</h2>
            <ul>
                {analytics.map(driver => (
                    <li key={driver.id}>{driver.name} - {driver.performanceScore}</li>
                ))}
            </ul>
        </div>
    );
};

export default DriverAnalytics;
