import LargeWeatherCard from './LargeWeatherCard';

const extractWeatherType = (code) => {
    if (code >= 90) return ['Thunderstorm', 'RainThunder'];
    else if (code >= 80) return ['Rainy', 'Rainy'];
    else if (code >= 70) return ['Snowy', 'Snowy'];
    else if (code >= 40) return ['Drizzles', 'Rainy'];
    else if (code >= 3) return ['Cloudy', 'PartlyCloudy'];
    else return ['Sunny', 'Sunny'];
};

export default function CurrentWeather({ location, weatherData }) {
    const temperature = weatherData['temperature_2m'];
    const [weatherType, weatherIcon] = extractWeatherType(
        weatherData['weather_code'] ?? 0
    );
    const weatherStats = [
        { title: 'Humidity', value: `${weatherData['relative_humidity_2m']}%` },
        { title: 'Precipitation', value: `${weatherData['precipitation']}ml` },
        { title: 'Pressure', value: `${weatherData['pressure_msl']}hPa` },
        { title: 'Wind', value: `${weatherData['wind_speed_10m']}m/s` },
    ];

    return (
        <>
            <h2 className="text-xl font-bold pb-4">Current Weather</h2>
            <LargeWeatherCard
                location={location}
                temperature={temperature}
                weatherType={weatherType}
                weatherIcon={`/weather/${weatherIcon}.svg`}
                weatherStats={weatherStats}
            />
            {/* ADD OTHERS HERE */}
            <p className="text-[#949AB5] text-base text-center pt-8">
                Built by Xero && Fiope
            </p>
        </>
    );
}
