import { Location04Icon } from 'hugeicons-react';

export default function LargeWeatherCard({
    location,
    temperature,
    weatherType,
    weatherIcon,
}) {
    return (
        <section className="bg-[#0F1017] p-4 border-2 border-[#181B2C] flex gap-4 rounded-xl flex-col cursor-default">
            {/* LOCATION MARKER */}
            <p className="flex items-center gap-2">
                <Location04Icon size={18} />
                <span className="text-sm">{location}</span>
            </p>
            {/* WEATHER DETAILS */}
            <p className="flex items-center justify-between">
                {/* TEMP DEGREES */}
                <p className="flex items-start gap-1">
                    <h3 className="text-5xl font-bold">{temperature}</h3>
                    <span className="text-[#31A9ED] text-2xl">°C</span>
                </p>

                {/* TEMP TYPE + ICON */}
                <p className="flex items-center gap-4">
                    <p className="text-4xl">{weatherType}</p>
                    <img
                        src={weatherIcon}
                        alt={weatherType}
                        className="w-[64px] h-[64px]"
                    />
                </p>
            </p>
        </section>
    );
}
