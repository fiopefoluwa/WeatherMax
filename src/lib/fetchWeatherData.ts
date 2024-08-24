import axios from 'axios';
import constants from '../shared/constants';

// Fetch weather data based on coordinates
const fetchWeatherData = async (lat: number, lng: number) => {
    const weatherRes = await axios.get(
        `${constants.WEATHER_API}&latitude=${lat}&longitude=${lng}`
    );

    return weatherRes.data;
};

export default fetchWeatherData;
