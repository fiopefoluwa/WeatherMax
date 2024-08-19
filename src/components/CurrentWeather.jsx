import LargeWeatherCard from './LargeWeatherCard';

export default function CurrentWeather() {
    const weatherType = 'Rainy';
    const weatherIcon = 'RainThunder';
    const weatherStats = [
        { title: 'Humidity', value: '80%' },
        { title: 'Precipitation', value: '5.1ml' },
        { title: 'Pressure', value: '450hPa' },
        { title: 'Wind', value: '23m/s' },
    ];

    return (
        <>
            <h2 className="text-xl font-bold pb-4">Current Weather</h2>
            <LargeWeatherCard
                location="Lagos"
                temperature={23}
                weatherType={weatherType}
                weatherIcon={`/weather/${weatherIcon}.svg`}
                weatherStats={weatherStats}
            />
        </>
    );
}
