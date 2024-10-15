import React, { useState } from 'react';
import { addDriver } from '../services/api';

const AddDriver = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDriver = { name, email, phone };
        await addDriver(newDriver);
        alert('Driver added successfully!');
    };

    return (
        <div className="add-driver">
            <h2>Add Driver</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Driver Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Driver Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="phone" 
                    placeholder="Driver Phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <button type="submit">Add Driver</button>
            </form>
        </div>
    );
};

export default AddDriver;
