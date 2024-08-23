import { useState } from "react";
import cities from "../../data/cities.json"

export default function DropDown() {
    const [selectedValue, setSelectedValue] = useState("-- select --");
    return (
        <>
            <select name="cities-dd" id="cities-dd" value={selectedValue} onChange={e => setSelectedValue(e.target.value)} className="w-full border-2 border-lighter-border bg-card-bg p-4 rounded-lg">
                {
                    cities.map((city, id) => (
                        <option key={id} value={city.name}>{city.name}</option>
                    ))
                }
            </select >
        </>
    )
}
