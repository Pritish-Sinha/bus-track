import React from 'react';
import { Route } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import DriverDashboard from './pages/DriverDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BookingForm from './components/BookingForm';
import RegistrationForm from './components/RegistrationForm';
import GoogleSignIn from './components/GoogleSignIn';
import FAQAndTestimonials from './components/FAQAndTestimonials';

const Routes = () => {
    return (
        <>
            <Route path="/user/dashboard" component={UserDashboard} />
            <Route path="/driver/dashboard" component={DriverDashboard} />
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/booking" component={BookingForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/sign-in" component={GoogleSignIn} />
            <Route path="/faq-testimonials" component={FAQAndTestimonials} />
        </>
    );
};

export default Routes;
