import extractWeatherType from '../utils/extractWeatherType';
import HourlyWeatherPill from './HourlyWeatherPill';

export default function HourlyWeather({ weatherData }) {
    const twelveHourlyForecast = [];

    // Build 12-hourly forecast
    for (let i = 0; i < 7; i++) {
        const iconPath = extractWeatherType(weatherData['weather_code'][i])[1];
        const hourStat = {
            weatherIcon: `/weather/${iconPath}.svg`,
            temperature: weatherData['temperature_2m'][i],
            time: weatherData['time'][i],
        };
        console.log(hourStat.weatherIcon);
        twelveHourlyForecast.push(hourStat);
    }

    console.log(twelveHourlyForecast);

    return (
        <>
            <h2 className="text-xl font-bold py-6">Hourly Weather</h2>
            <section
                className="max-w-lg w-full flex-nowrap overflow-scroll overflow-y-hidden overflow-x-auto flex gap-2 items-center"
                id="hourly-pills"
            >
                {twelveHourlyForecast.map((stats, id) => (
                    <HourlyWeatherPill
                        key={id}
                        weatherIcon={stats.weatherIcon}
                        isPresent={id == 0}
                        temperature={stats.temperature}
                    />
                ))}
            </section>
        </>
    );
}
