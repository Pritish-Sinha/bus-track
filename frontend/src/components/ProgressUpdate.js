import React, { useState, useEffect } from 'react';
import { getProgress } from '../services/api';

const ProgressUpdate = ({ bookingId }) => {
    const [progress, setProgress] = useState('');

    useEffect(() => {
        async function fetchProgress() {
            const progressData = await getProgress(bookingId);
            setProgress(progressData.status);
        }
        fetchProgress();
    }, [bookingId]);

    return (
        <div className="progress-update">
            <h2>Delivery Progress</h2>
            <p>Current Status: {progress}</p>
        </div>
    );
};

export default ProgressUpdate;
