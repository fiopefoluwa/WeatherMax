import { useState } from 'react';
import { MyButton } from '../components/Button';
import { Search01Icon } from 'hugeicons-react';
import GreyCloudIcon from '../assets/grey-cloud.svg';
import WeatherStats from './weatherstats';
import cities from '../data/cities.json';
import axios from 'axios';
import constants from '../shared/constants';

export const Homepage = () => {
    // Determines when to show weather stats
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchCity, setSearchCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [weatherData, setWeatherData] = useState(null);

    // Suggest top cities
    const handleSearchChange = (ev) => {
        setIsLoaded(false);
        setIsFetching(false);
        setIsError(false);

        const inputValue = ev.target.value;
        setSearchCity(inputValue);

        if (inputValue) {
            setSuggestions(
                cities
                    .filter((city) =>
                        city.name
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                    )
                    .slice(0, 5) // return only top 5
            );
        } else {
            setSuggestions([]);
        }
    };

    // Set city name, extract latitude and longitude then make request
    const handleSuggestionClick = (cityName) => {
        setSearchCity(cityName);
        const { lat, lng } = extractCoordinates(cityName);
        if (lat && lng) makeWeatherRequest(lat, lng);
        else setIsError(true);
    };

    // Extract latitude and longitude then make request
    const handleGoBtnClick = () => {
        const { lat, lng } = extractCoordinates(searchCity);
        if (lat && lng) makeWeatherRequest(lat, lng);
        else setIsError(true);
    };

    // Extract coordinates and return them
    const extractCoordinates = (location) => {
        try {
            const { lat, lng } = cities.find(
                (city) => city.name.toLowerCase() == location.toLowerCase()
            );
            return { lat, lng };
        } catch (err) {
            setIsError(true);
            console.error(err);
        }
    };

    // Fetch weather data
    const makeWeatherRequest = async (lat, lng) => {
        setIsFetching(true);
        setSuggestions([]);
        setIsError(false);

        await axios
            .get(`${constants.API}&latitude=${lat}&longitude=${lng}`)
            .then((res) => {
                const data = res['data'];
                console.log(data);

                setWeatherData(data);
                setIsFetching(false);
                setIsLoaded(true);
            })
            .catch((err) => {
                setIsError(true);
                console.error(err);
            });
    };

    return (
        <>
            <div className="max-w-lg mx-auto w-screen p-4">
                {/* HEADER */}
                <div className="flex justify-center text-4xl font-semibold">
                    <p>Weather</p>
                    <p className="text-[#31A9ED]">Max</p>
                </div>
                <div className="py-2 text-[#7E839A]">
                    <p className="text-md font-normal text-center">
                        Fast, precise weather prediction and forecasts
                    </p>
                </div>

                {/* SEARCH BOX */}
                <div className="relative">
                    <div className="relative flex py-4 transform">
                        <input
                            type="text"
                            placeholder="City or state"
                            className="text-md w-full px-10 py-2  border-2 border-[#181B2C] rounded-lg  text-[#CACACA] bg-[#11131C] outline-none font-normal focus:border-[#31A9ED] transition-all"
                            onChange={(ev) => handleSearchChange(ev)}
                            value={searchCity}
                        />
                        <Search01Icon
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                            color="#CACACA"
                            size={20}
                        />
                        <MyButton textContent="Go" onClick={handleGoBtnClick} />
                    </div>
                </div>
                <div className="relative mt-2">
                    {suggestions.length > 0 && (
                        <ul className="w-full bg-[#0F1017] block rounded-lg p-4 border-[1px] border-[#181B2C] absolute top-0 bg-opacity-80 backdrop-blur-lg z-[999] max-h-60 overflow-y-auto">
                            <h4 className="text-sm text-[#949AB5] pb-2">
                                Suggestions
                            </h4>
                            {suggestions.map((city, id) => (
                                <li
                                    key={id}
                                    className="font-normal cursor-pointer opacity-70 hover:opacity-100"
                                    onClick={() =>
                                        handleSuggestionClick(city.name)
                                    }
                                >
                                    {city.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* DEFAULT STATE */}
                {!isLoaded && (
                    <div className="py-4">
                        <div className="justify-center flex select-none">
                            <img
                                src={GreyCloudIcon}
                                alt="Cloud Image"
                                width={72}
                            />
                        </div>
                        <div className="text-center text-[#7E839A] font-normal transform translate-y-2">
                            <p>Type in your city to get</p>
                            <span>weather forecasts.</span>
                        </div>
                    </div>
                )}

                {isFetching && (
                    <h3 className="text-center font-normal py-2 text-[#7E839A]">
                        Getting forecast...
                    </h3>
                )}

                {isError ? (
                    <h3 className="text-center font-normal py-2 text-red-300">
                        Seems we can&apos;t weather info at this time.
                    </h3>
                ) : (
                    isLoaded && (
                        <WeatherStats
                            location={searchCity}
                            weatherData={weatherData}
                        />
                    )
                )}
            </div>
        </>
    );
};
