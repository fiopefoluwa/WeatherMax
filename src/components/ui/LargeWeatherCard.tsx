import { Location04Icon } from 'hugeicons-react';

interface LargeWeatherCard{
    location: string;
    temperature : number;
    weatherType : string;
    weatherIcon: string;
    weatherStats : { title: string; value: string}[];
}
export default function LargeWeatherCard({
    location,
    temperature,
    weatherType,
    weatherIcon,
    weatherStats,
}: LargeWeatherCard) {
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
                    <h3 className="text-3xl sm:text-5xl font-bold">
                        {temperature}
                    </h3>
                    <span className="text-[#31A9ED] text-3xl">°C</span>
                </p>

                {/* TEMP TYPE + ICON */}
                <p className="flex items-center gap-4">
                    <p className="text-3xl sm:text-4xl">{weatherType}</p>
                    <img
                        src={weatherIcon}
                        alt={weatherType}
                        className="w-8 h-8 sm:w-16 sm:h-16"
                    />
                </p>
            </p>
            <div className="w-full h-[1px] bg-[#181B2C]"></div>
            {/* WEATHER STATS */}
            <section className="flex items-center justify-between">
                {weatherStats.map((stat, id) => (
                    <div key={id}>
                        <p className="text-xs sm:text-base font-normal text-[#949AB5]">
                            {stat.title}
                        </p>
                        <p className="text-sm sm:text-base font-medium pt-1">{stat.value}</p>
                    </div>
                ))}
            </section>
        </section>
    );
}
