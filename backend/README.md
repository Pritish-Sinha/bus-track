# Logistics Platform Backend

## Objective
This backend serves the core functionality of a scalable logistics platform, handling real-time booking, driver allocation, vehicle tracking, and admin management.

## Features
- **Admin Management**:
  - Add drivers and vehicles.
  - Manage bookings and progress tracking.
  - View driver analytics, including performance and trip history.
  
- **User Functionality**:
  - Book vehicle services (two-wheeler, mini truck, truck).
  - Track real-time vehicle location.
  - Estimate pricing and surcharges.
  
- **Driver Functionality**:
  - Accept/decline booking requests.
  - View assigned jobs and job history.
  - Update job status and progress.

- **Real-Time GPS Integration**:
  - Integrated with Google Maps API for live vehicle tracking.
  - Proximity-based driver assignment based on the nearest available driver.

## Technology Stack
- **Node.js**: Backend server and API routing.
- **Express.js**: Middleware for handling requests and routing.
- **MongoDB**: NoSQL database to store user, driver, and booking data, with sharding for scalability.
- **Redis**: Caching system to improve performance for real-time vehicle tracking.
- **JWT**: For secure user authentication and authorization.
- **Google Maps API**: For geolocation and route tracking.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Pritish-Sinha/bus-tracker.git
   cd logistics-backend
``
2. Install dependencies:

```bash
npm install
```
3. Set up the .env file:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REDIS_URL=your_redis_url
```

Run the development server:
```bash
npm run dev
```

## API Endpoints

| Route                     | Method | Description                        |
|---------------------------|--------|------------------------------------|
| `/api/admin/login`         | POST   | Admin login                        |
| `/api/admin/addDriver`     | POST   | Add a new driver                   |
| `/api/admin/dashboard`     | GET    | Get admin dashboard data           |
| `/api/bookings/create`     | POST   | Create a new booking               |
| `/api/bookings/track/:id`  | GET    | Track a booking with real-time updates |
| `/api/driver/updateStatus` | POST   | Driver updates their job status    |

## Database
The platform uses MongoDB with sharding for scaling, supporting real-time data storage, vehicle booking, and GPS tracking.

## Redis Caching
The Redis cache stores frequently accessed data like live vehicle locations to minimize database load and enhance real-time tracking performance.
