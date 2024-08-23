interface GeoEnabledProps {
    city: string;
}

export default function GeoEnabled(props: GeoEnabledProps) {
    return (
        <>
            <main>
                <h2>Forecasts for {props.city}</h2>
            </main>
        </>
    );
}
