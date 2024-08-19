import CurrentWeather from '../components/CurrentWeather';
/** 

WEATHER RESPONSE INTERFACE: **DON'T UNCOMMENT

const weatherData = {
    current: {
        interval: number,
        precipitation: number,
        pressure_msl: number,
        relative_humidity_2m: number,
        temperature_2m: number,
        time: date,
        wind_speed_10m: number
    },
    current_units: {
        interval: "seconds",
        precipitation: "mm",
        pressure_msl: "hPa",
        relative_humidity_2m: "%",
        temperature_2m: "°C",
        time: "iso8601",
        wind_speed_10m: "km/h"
    },
    daily: {
        precipitation_probability_max: array[number],
        rain_sum: array[number],
        sunrise: array[date],
        sunset: array[date],
        temperature_2m_max: array[number],
        temperature_2m_min: array[number],
        uv_index_max: array[number],
        weather_code: array[number]
    }
}

*/

export default function WeatherStats({ location, weatherData }) {
    return (
        <div>
            <CurrentWeather
                location={location}
                weatherData={weatherData['current']}
            />
        </div>
    );
}
