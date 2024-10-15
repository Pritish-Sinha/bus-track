// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const RegistrationForm = () => {
    const { role } = useParams();
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        // Implement your registration logic here, possibly an API call
        console.log(`Registering ${role}:`, { name, email, password });
        // Redirect to the corresponding dashboard after successful registration
        history.push(`/${role}/dashboard`);
    };

    return (
        <div style={styles.container}>
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Registration</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
};

export default RegistrationForm;
