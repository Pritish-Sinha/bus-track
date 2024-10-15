import React, { useState } from 'react';
import { createBooking } from '../services/api';

const BookingForm = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [vehicleType, setVehicleType] = useState('Two-Wheeler');
    const [pickupTime, setPickupTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingDetails = { pickup, destination, vehicleType, pickupTime };
        await createBooking(bookingDetails);
        alert('Booking created successfully!');
    };

    return (
        <div className="booking-form">
            <h2>Book a Delivery</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Pickup Location" 
                    value={pickup} 
                    onChange={(e) => setPickup(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Destination" 
                    value={destination} 
                    onChange={(e) => setDestination(e.target.value)} 
                />
                <select 
                    value={vehicleType} 
                    onChange={(e) => setVehicleType(e.target.value)}
                >
                    <option value="Two-Wheeler">Two-Wheeler</option>
                    <option value="Mini Truck">Mini Truck</option>
                    <option value="Truck">Truck</option>
                </select>
                <input 
                    type="time" 
                    value={pickupTime} 
                    onChange={(e) => setPickupTime(e.target.value)} 
                />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;
