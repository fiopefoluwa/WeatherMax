import LargeWeatherCard from './LargeWeatherCard';

export default function CurrentWeather() {
    return (
        <>
            <h2 className="text-xl font-bold pb-4">Current Weather</h2>
            <LargeWeatherCard location="Lagos" />
        </>
    );
}
