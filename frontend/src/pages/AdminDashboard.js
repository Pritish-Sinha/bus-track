import React, { useState, useEffect } from 'react';
import { getDrivers, getBookings, getVehicles, addDriver, addVehicle, getDriverAnalytics } from '../services/api';
import AddDriver from '../components/AddDriver';
import AddVehicle from '../components/AddVehicle';
import DriverAnalytics from '../components/DriverAnalytics';

const AdminDashboard = () => {
    const [drivers, setDrivers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [analytics, setAnalytics] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedDrivers = await getDrivers();
            setDrivers(fetchedDrivers);

            const fetchedVehicles = await getVehicles();
            setVehicles(fetchedVehicles);

            const fetchedBookings = await getBookings();
            setBookings(fetchedBookings);

            const fetchedAnalytics = await getDriverAnalytics();
            setAnalytics(fetchedAnalytics);
        }
        fetchData();
    }, []);

    const handleAddDriver = async (newDriver) => {
        await addDriver(newDriver);
        const updatedDrivers = await getDrivers();
        setDrivers(updatedDrivers);
    };

    const handleAddVehicle = async (newVehicle) => {
        await addVehicle(newVehicle);
        const updatedVehicles = await getVehicles();
        setVehicles(updatedVehicles);
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            
            {/* Section for adding drivers */}
            <section>
                <h3>Add Driver</h3>
                <AddDriver onAddDriver={handleAddDriver} />
            </section>

            {/* Section for adding vehicles */}
            <section>
                <h3>Add Vehicle</h3>
                <AddVehicle onAddVehicle={handleAddVehicle} />
            </section>

            {/* Displaying existing drivers */}
            <section>
                <h3>Drivers List</h3>
                <ul>
                    {drivers.map((driver) => (
                        <li key={driver.id}>
                            {driver.name} - {driver.vehicleType}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Displaying existing vehicles */}
            <section>
                <h3>Vehicles List</h3>
                <ul>
                    {vehicles.map((vehicle) => (
                        <li key={vehicle.id}>
                            {vehicle.model} - {vehicle.licensePlate}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Displaying bookings */}
            <section>
                <h3>Bookings Progress</h3>
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id}>
                            {booking.pickup} to {booking.destination} - Status: {booking.status}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Displaying driver analytics */}
            <section>
                <h3>Driver Performance Analytics</h3>
                <DriverAnalytics data={analytics} />
            </section>
        </div>
    );
};

export default AdminDashboard;
