interface HourlyWeatherPill {
    unit: string;
    weatherIcon: string;
    weatherType: string;
    temperature: number;
    time: string;
    isPresent: boolean;
}

export default function HourlyWeatherPill({
    unit,
    weatherIcon,
    weatherType,
    temperature,
    time,
    isPresent,
}: HourlyWeatherPill) {
    return (
        <>
            <div className="p-2 rounded-lg border-2 border-[#181B2C] bg-card-bg flex flex-col justify-center items-center w-[160px] h-[160px] cursor-pointer flex-shrink-0 transition-all hover:bg-[#31A9ED] hover:border-[#31A9ED] hover:w-[220px] group">
                <img
                    src={weatherIcon}
                    alt={weatherIcon}
                    className="w-16 h-16"
                />
                <p className="py-2 flex justify-between gap-2 items-center">
                    <span>{temperature}°{unit}</span>
                    <span className="text-sm text-[#949AB5] group-hover:text-white">
                        {weatherType}
                    </span>
                </p>
                <p className="flex items-center gap-2 text-sm">
                    <span>{time}</span>
                    {isPresent && (
                        <div>
                            <span className="mr-1">•</span>
                            <span>NOW</span>
                        </div>
                    )}
                </p>
            </div>
        </>
    );
}
