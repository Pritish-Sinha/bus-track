// src/components/SelectionPage.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const SelectionPage = () => {
    const history = useHistory();

    const navigateToLogin = (role) => {
        history.push(`/login/${role}`);
    };

    const navigateToRegister = (role) => {
        history.push(`/register/${role}`);
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to the Logistics Platform</h1>
            <div style={styles.buttonContainer}>
                <button onClick={() => navigateToLogin('user')}>User Login</button>
                <button onClick={() => navigateToRegister('user')}>User Registration</button>
                <button onClick={() => navigateToLogin('admin')}>Admin Login</button>
                <button onClick={() => navigateToRegister('admin')}>Admin Registration</button>
                <button onClick={() => navigateToLogin('driver')}>Driver Login</button>
                <button onClick={() => navigateToRegister('driver')}>Driver Registration</button>
            </div>
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
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
};

export default SelectionPage;
