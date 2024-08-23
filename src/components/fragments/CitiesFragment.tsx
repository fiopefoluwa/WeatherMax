import { useState } from 'react';
import DropDown from '../ui/DropDown';
import ICoords from '../../lib/coords';
import fetchWeatherData from '../../lib/fetchWeatherData';
import WeatherStats from '../ui/WeatherStats';

export default function CitiesFragment() {
    const [weatherData, setWeatherData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [city, setCity] = useState('');
    const [coords, setCoords] = useState<ICoords>({ lat: -1, lng: -1 });

    const handleOnChange = (coords: ICoords, city: string) => {
        setCoords(coords);
        setCity(city);
    };

    // Make weather requests based on coordinates
    const makeWeatherRequest = async () => {
        if (coords.lat != -1 && coords.lng != -1) {
            try {
                setWeatherData(null);
                setErrorMsg('');
                setIsFetching(true);
                const weatherData = await fetchWeatherData(
                    coords.lat,
                    coords.lng
                );
                // DEBUG: console.log(weatherData);
                setWeatherData(weatherData);
            } catch (err) {
                console.error(err);
                setErrorMsg('');
            } finally {
                setIsFetching(false);
            }
        } else {
            setIsFetching(false);
            console.error('nope');
            setErrorMsg('Select a city to get forecasts.');
        }
    };

    return (
        <main className="w-full">
            <h1 className="font-medium text-grey-050 mb-4">Select any city</h1>

            <DropDown onChange={handleOnChange} />

            <button
                className="text-white bg-primary bg-opacity-10 border-2 border-primary rounded-lg py-2 px-6 border-opacity-50 my-4 hover:bg-opacity-30 hover:border-opacity-70 transition-all active:scale-95"
                onClick={makeWeatherRequest}
            >
                Get Forecasts
            </button>

            {errorMsg && (
                <p className="font-medium text-error my-4">{errorMsg}</p>
            )}

            {isFetching && (
                <p className="font-medium text-grey-050 my-4">
                    Getting weather data...
                </p>
            )}

            <section className="mt-4">
                {weatherData && (
                    <>
                        <h3 className="font-bold text-2xl mb-4">Weather Overview</h3>
                        <WeatherStats
                            location={city}
                            weatherData={weatherData}
                        />
                    </>
                )}
            </section>
        </main>
    );
}
