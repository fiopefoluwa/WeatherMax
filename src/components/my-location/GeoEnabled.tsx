import WeatherStats from '../ui/WeatherStats';

interface GeoEnabledProps {
    city: string;
    data: any;
}

export default function GeoEnabled(props: GeoEnabledProps) {
    return (
        <>
            <main>
                <h2 className="text-2xl mb-4 font-bold">
                    Forecasts for {props.city}
                </h2>
                <WeatherStats location={props.city} weatherData={props.data} />
            </main>
        </>
    );
}
