# Logistics Platform Frontend

## Objective
This frontend provides a user-friendly interface for different roles in the logistics platform: User, Driver, and Admin. It includes features like booking services, real-time tracking, and fleet management.

## Features
- **User Functionality**:
  - Service booking (two-wheeler, mini truck, truck).
  - Live vehicle tracking via Google Maps API.
  - Price estimation, including surge charges.

- **Admin Functionality**:
  - View and manage drivers and vehicles.
  - Real-time monitoring of active jobs and driver analytics.
  - Add new drivers and vehicles.

- **Driver Functionality**:
  - Accept or decline job requests.
  - View assigned bookings and update progress.

## Technology Stack
- **React.js**: Frontend framework for building the user interface.
- **Firebase Authentication**: Simple sign-in options for users, drivers, and admins.
- **Google Maps API**: Integrated for real-time vehicle location tracking.
- **Axios**: For API requests to the backend services.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/logistics-frontend.git
   cd logistics-frontend
``
2. Install dependencies:
```bash
npm install
```

3. Set up the .env file:

```bash
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```
4. Run the development server:
```bash
npm start
```

## Available Pages
- User Registration & Login: Sign in or sign up via Firebase authentication.
- User Dashboard: View booking options, track deliveries, and check order history.
- Driver Dashboard: Accept bookings, view job assignments, and update status.
- Admin Dashboard: Manage drivers, vehicles, and monitor real-time job statuses.

## Components
- BookingForm.js: For creating new bookings.
- MapComponent.js: Displays real-time tracking of vehicles using Google Maps.
- AdminDashboard.js: Admin view for managing drivers and vehicles.
- DriverAnalytics.js: Displays driver performance and trip history.