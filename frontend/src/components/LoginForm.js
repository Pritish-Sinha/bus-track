// src/components/LoginForm.js
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const LoginForm = () => {
    const { role } = useParams();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Implement your login logic here, possibly an API call
        console.log(`Logging in ${role}:`, { email, password });
        // Redirect to the corresponding dashboard after successful login
        history.push(`/${role}/dashboard`);
    };

    return (
        <div style={styles.container}>
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
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

export default LoginForm;
