import { useState } from 'react';
import NoGeo from '../my-location/NoGeo';

export default function MyLocationFragment() {
    const [isGeoEnabled, setIsGeoEnabled] = useState(false);

    return (
        <main className="w-full">
            {isGeoEnabled ? <h1>Is Geolocation</h1> : <NoGeo />}
        </main>
    );
}
