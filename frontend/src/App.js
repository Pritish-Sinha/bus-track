import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import DriverDashboard from './pages/DriverDashboard';
import AdminDashboard from './pages/AdminDashboard';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import SelectionPage from './components/SelectionPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={SelectionPage} />
                <Route path="/login/:role" component={LoginForm} />
                <Route path="/register/:role" component={RegistrationForm} />
                <Route path="/user/dashboard" component={UserDashboard} />
                <Route path="/driver/dashboard" component={DriverDashboard} />
                <Route path="/admin/dashboard" component={AdminDashboard} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
