const axios = require('axios');

// Function to check if the weather is bad (e.g., rainy)
exports.isBadWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: 'Delhi', //cities where the service is operating
                appid: process.env.OPENWEATHER_API_KEY
            }
        });

        const weather = response.data.weather[0].main;
        return weather === 'Rain';
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return false;
    }
};
