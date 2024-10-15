import React, { useState } from 'react';
import { addVehicle } from '../services/api';

const AddVehicle = () => {
    const [type, setType] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newVehicle = { type, capacity };
        await addVehicle(newVehicle);
        alert('Vehicle added successfully!');
    };

    return (
        <div className="add-vehicle">
            <h2>Add Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Vehicle Type" 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Capacity" 
                    value={capacity} 
                    onChange={(e) => setCapacity(e.target.value)} 
                />
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    );
};

export default AddVehicle;
