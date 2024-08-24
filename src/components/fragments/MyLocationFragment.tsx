import { useEffect, useState } from 'react';
import NoGeo from '../my-location/NoGeo';
import ICoords from '../../lib/coords';
import GeoEnabled from '../my-location/GeoEnabled';
import axios from 'axios';
import constants from '../../shared/constants';
import fetchWeatherData from '../../lib/fetchWeatherData';

export default function MyLocationFragment() {
    const [isGeoEnabled, setIsGeoEnabled] = useState(false);
    const [showDeniedMsg, setShowDeniedMsg] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [coords, setCoords] = useState<ICoords>({ lat: -1, lng: -1 });
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const cacheKey = 'cachedCity';
    const cacheExpiryKey = 'cacheExpiry';
    const cacheDuration = 60 * 60 * 1000; // 1 hr

    const geoSuccessCallback = async (pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords;

        // DEBUG: console.log("coords:", pos.coords)

        setCoords({
            lat: latitude,
            lng: longitude,
        });

        // Check cached data
        const cachedCity = localStorage.getItem(cacheKey);
        const cacheExpiry = localStorage.getItem(cacheExpiryKey);

        // If we have both keys and current time is not expiry, return cache
        if (cachedCity && cacheExpiry && Date.now() < parseInt(cacheExpiry)) {
            setCityName(cachedCity);

            // Fetch weather data directly
            const weatherData = await fetchWeatherData(latitude, longitude);
            setWeatherData(weatherData);

            // Display data
            setIsGeoEnabled(true);
            setIsLoading(false);

            return;
        }

        // Make request to get current city if cache has expired
        try {
            const api_key = import.meta.env.VITE_LOCATION_API_KEY;
            if (!api_key) {
                throw new Error('Failed to load API key.');
            }

            const res = await axios.get(
                `${constants.CITY_API}&key=${api_key}&lat=${latitude}&lon=${longitude}`
            );

            // DEBUG: console.log(res.data);
            const fetchedCity =
                res.data['address']['city'] || res.data['address']['county'];

            setCityName(fetchedCity);

            // Cache the city and set the cache expiry time
            localStorage.setItem(cacheKey, fetchedCity);
            localStorage.setItem(
                cacheExpiryKey,
                (Date.now() + cacheDuration).toString()
            );

            // Fetch weather data
            const weatherData = await fetchWeatherData(latitude, longitude);
            setWeatherData(weatherData);
            setIsGeoEnabled(true);
        } catch (err) {
            console.error(err);
            throw new Error('Failed to fetch current city.');
        } finally {
            setIsLoading(false);
        }
    };

    // Try to get geolocation privileges on load
    useEffect(() => {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    geoSuccessCallback,
                    () => {
                        setIsGeoEnabled(false);
                        setIsLoading(false);
                        setShowDeniedMsg(true);
                    }
                );
            } else {
                setIsGeoEnabled(false);
                setIsLoading(false);
                setShowDeniedMsg(true);
            }
        } catch (err) {
            alert(err);
        }
    }, []);

    return (
        <>
            {isLoading ? (
                <main className="w-full h-[300px] grid place-items-center">
                    <p className="text-grey-050">Checking compatibility...</p>
                </main>
            ) : (
                <main className="w-full">
                    {showDeniedMsg && (
                        <p className="text-center text-error">
                            Geolocation request denied or not allowed.
                        </p>
                    )}
                    {isGeoEnabled ? (
                        <GeoEnabled city={cityName} data={weatherData} />
                    ) : (
                        <NoGeo />
                    )}
                </main>
            )}
        </>
    );
}
