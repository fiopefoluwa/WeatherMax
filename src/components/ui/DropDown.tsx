import { useState } from "react";
import cities from "../../data/cities.json"

export default function DropDown() {
    const [selectedValue, setSelectedValue] = useState("-- select --");
    const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <>
            <select name="cities-dd" id="cities-dd" value={selectedValue} onChange={e => setSelectedValue(e.target.value)} className="w-full border-2 border-lighter-border bg-card-bg p-4 rounded-lg">
                {
                    sortedCities.map((city, id) => (
                        <option key={id} value={city.name} className="select-none">{city.name}</option>
                    ))
                }
            </select >
        </>
    )
}
