const moment = require('moment');
const weatherService = require('./weatherService');

// Constants for surge pricing
const PEAK_HOURS = [
    { start: '06:00', end: '08:00' },
    { start: '13:00', end: '14:00' },
    { start: '20:00', end: '00:00' }
];
const REMOTE_LOCATIONS = ['remote-area1', 'remote-area2']; // Example remote areas
const CROWDY_LOCATIONS = ['crowdy-area1', 'crowdy-area2']; // Example crowded areas

// Function to check if the current time falls within peak hours
const isPeakHour = (pickupTime) => {
    const time = moment(pickupTime, 'HH:mm');
    return PEAK_HOURS.some(({ start, end }) => time.isBetween(moment(start, 'HH:mm'), moment(end, 'HH:mm'), null, '[)'));
};

// Function to check if the pickup location is remote or crowded
const isRemoteOrCrowdyLocation = (pickupLocation) => {
    return REMOTE_LOCATIONS.includes(pickupLocation) || CROWDY_LOCATIONS.includes(pickupLocation);
};

// Function to calculate surge multiplier based on various conditions
exports.calculateSurgeMultiplier = async (pickupTime, pickupLocation) => {
    let surgeMultiplier = 1;

    if (isPeakHour(pickupTime)) {
        surgeMultiplier *= 1.5;
    }

    if (await weatherService.isBadWeather()) {
        surgeMultiplier *= 1.3;
    }

    if (isRemoteOrCrowdyLocation(pickupLocation)) {
        surgeMultiplier *= 1.4;
    }

    if (isBankHoliday(pickupTime)) {
        surgeMultiplier *= 1.2;
    }

    return surgeMultiplier;
};

// Function to check if the pickup date falls on a bank holiday
const isBankHoliday = (pickupTime) => {
    const bankHolidays = [
        '2024-01-26', // Republic Day
        '2024-08-15', // Independence Day
        '2024-10-02', // Gandhi Jayanti
    ];

    const pickupDate = moment(pickupTime).format('YYYY-MM-DD');
    return bankHolidays.includes(pickupDate);
};
