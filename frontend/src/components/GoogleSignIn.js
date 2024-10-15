import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const GoogleSignIn = () => {
    const signInWithGoogle = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => {
                console.log('Google Sign-In Successful:', result.user);
            })
            .catch(error => {
                console.error('Google Sign-In Error:', error);
            });
    };

    return (
        <div className="google-sign-in">
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    );
};

export default GoogleSignIn;
