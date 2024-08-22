import DailyWeatherPill from './DailyWeatherPill';

interface DailyWeather{
    weatherData: { 
        sunrise: string[]; 
        sunset: string[];
        uv_index_max : number[];
        precipitation_probability_max: number[];
        time : string[];
    }
}

export default function DailyWeather({ weatherData } : DailyWeather) {
    const dailyForecast = [];

    // Build daily forecast data
    for (let i = 0; i < 7; i++) {
        const dayStat = {
            sunrise: weatherData['sunrise'][i].split('T')[1],
            sunset: weatherData['sunset'][i].split('T')[1],
            uv: weatherData['uv_index_max'][i],
            chance: weatherData['precipitation_probability_max'][i],
            day: weatherData['time'][i].split('T')[0],
        };
        dailyForecast.push(dayStat);
    }

    return (
        <div className="max-w-lg overflow-hidden">
            <h2 className="text-xl font-bold py-6">Daily Forecast</h2>
            <section
                className="flex gap-2 flex-nowrap items-center overflow-y-hidden overflow-x-auto"
                id="daily-pills"
            >
                {dailyForecast.map((stats, id) => (
                    <DailyWeatherPill
                        key={id}
                        sunrise={stats.sunrise}
                        sunset={stats.sunset}
                        uv={stats.uv}
                        chance={stats.chance}
                        day={stats.day}
                    />
                ))}
            </section>
        </div>
    );
}
