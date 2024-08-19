import CurrentWeather from '../components/CurrentWeather';

export default function WeatherStats({ currentWeather }) {
    return (
        <div>
            <CurrentWeather location={currentWeather.location} />
        </div>
    );
}
