import extractWeatherType from '../utils/extractWeatherType';
import HourlyWeatherPill from './HourlyWeatherPill';


interface Hourly{
    weatherData : {
        weatherType : string;
        weatherIcon: string;
        temperature : number;
        time : Date;
    }[]
}
export default function HourlyWeather({ weatherData } : Hourly) {
    const twelveHourlyForecast = [];
    const currentHour = new Date().getHours();
    const matchingHour = weatherData['time'].find(
        (time) => parseInt(time.split('T')[1].slice(0, 2)) == currentHour
    );
    const startIndex = weatherData['time'].indexOf(matchingHour);
    // DEBUG: console.log(startIndex)

    // Build 12-hourly forecast
    for (let i = startIndex; i < startIndex + 12; i++) {
        const [type, icon] = extractWeatherType(weatherData['weather_code'][i]);
        const hourStat = {
            weatherType: type,
            weatherIcon: `/weather/${icon}.svg`,
            temperature: weatherData['temperature_2m'][i],
            time: weatherData['time'][i],
        };
        // DEBUG: console.log(hourStat.weatherIcon);
        twelveHourlyForecast.push(hourStat);
    }

    // DEBUG: console.log(twelveHourlyForecast);

    return (
        <div className="max-w-lg overflow-hidden">
            <h2 className="text-xl font-bold py-6">12-Hour Forecast</h2>
            <section
                className="flex gap-2 flex-nowrap items-center overflow-y-hidden overflow-x-auto"
                id="hourly-pills"
            >
                {twelveHourlyForecast.map((stats, id) => (
                    <HourlyWeatherPill
                        key={id}
                        weatherType={stats.weatherType}
                        weatherIcon={stats.weatherIcon}
                        isPresent={id == 0}
                        temperature={stats.temperature}
                        time={stats.time.split('T')[1]}
                    />
                ))}
            </section>
        </div>
    );
}
