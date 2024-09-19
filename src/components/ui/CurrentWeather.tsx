import LargeWeatherCard from './LargeWeatherCard';
import extractWeatherType from '../../utils/extractWeatherType';
import TempConverter from '../../lib/converter';
import { useContext } from 'react';
import { TempUnitContext } from '../../providers/temp/tempUnitContext';

interface CurrentWeather {
    location: string;
    weatherData: any;
}

export default function CurrentWeather({
    location,
    weatherData,
}: CurrentWeather) {
    const tempContext = useContext(TempUnitContext);
    const converter = new TempConverter(tempContext.currentTempUnit);
    const temperature = converter.convert(weatherData['temperature_2m']);
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
            <h2 className="text-lg font-bold pb-4 text-primary">
                Current Weather
            </h2>
            <LargeWeatherCard
                unit={converter.tempUnit}
                location={location}
                temperature={temperature}
                weatherType={weatherType}
                weatherIcon={`/weather/${weatherIcon}.svg`}
                weatherStats={weatherStats}
            />
        </>
    );
}
