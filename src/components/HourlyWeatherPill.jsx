export default function HourlyWeatherPill({
    weatherIcon,
    temperature,
    // time,
    isPresent,
}) {
    return (
        <>
            <div className="p-4 rounded-lg border-2 border-[#181B2C] bg-[#0F1017] flex flex-col justify-center items-center min-w-[160px] h-[160px] flex-grow cursor-pointer">
                <img src={weatherIcon} alt={weatherIcon} className="w-16 h-16" />
                <p className="pt-4 flex items-center gap-2 text-sm">
                    <span>{temperature}°C</span>
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
