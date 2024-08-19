export default function HourlyWeatherPill({
    weatherIcon,
    weatherType,
    temperature,
    time,
    isPresent,
}) {
    return (
        <>
            <div className="p-2 rounded-lg border-2 border-[#181B2C] bg-[#0F1017] flex flex-col justify-center items-center w-[160px] h-[160px] cursor-pointer flex-shrink-0">
                <img
                    src={weatherIcon}
                    alt={weatherIcon}
                    className="w-16 h-16"
                />
                <p className="py-2 flex justify-between gap-2 items-center">
                    <span>{temperature}°C</span>
                    <span className="text-sm text-[#949AB5]">
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
