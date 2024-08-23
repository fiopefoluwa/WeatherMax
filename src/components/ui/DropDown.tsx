import { useState } from 'react';
import cities from '../../data/cities.json';
import ICoords from '../../lib/coords';

interface DropDownProps {
    onChange: (coords: ICoords) => void;
}

export default function DropDown(props: DropDownProps) {
    const [selectedValue, setSelectedValue] = useState('-- select --');
    const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));

    // Propagate coordinates to cities fragment
    const handleSelectChange = (city: string) => {
        setSelectedValue(city);
        const selectedCity = cities.find((thisCity) => thisCity.name == city);
        if (selectedCity) {
            const coords = { lat: selectedCity.lat, lng: selectedCity.lng };
            props.onChange(coords);
        }
    };

    return (
        <>
            <select
                name="cities-dd"
                id="cities-dd"
                value={selectedValue}
                onChange={(ev) => handleSelectChange(ev.target.value)}
                className="w-full border-2 border-lighter-border bg-card-bg p-4 rounded-lg"
            >
                {sortedCities.map((city, id) => (
                    <option key={id} value={city.name} className="select-none">
                        {city.name}
                    </option>
                ))}
            </select>
        </>
    );
}
