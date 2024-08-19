import LargeWeatherCard from './LargeWeatherCard';

export default function CurrentWeather({ location, weatherData }) {
    const weatherType = 'Rainy';
    const weatherIcon = 'RainThunder';
    const temperature = weatherData['temperature_2m'];
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
