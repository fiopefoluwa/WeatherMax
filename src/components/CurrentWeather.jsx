import LargeWeatherCard from './LargeWeatherCard';

export default function CurrentWeather() {
    const weatherType = 'Rainy';
    const weatherIcon = 'RainThunder';

    return (
        <>
            <h2 className="text-xl font-bold pb-4">Current Weather</h2>
            <LargeWeatherCard
                location="Lagos"
                temperature={23}
                weatherType={weatherType}
                weatherIcon={`/weather/${weatherIcon}.svg`}
            />
        </>
    );
}
