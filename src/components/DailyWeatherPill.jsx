import {
    SunriseIcon,
    SunsetIcon,
    Uv02Icon,
    CloudAngledRainIcon,
} from 'hugeicons-react';

export default function DailyWeatherPill() {
    return (
        <>
            <div className="p-2 flex flex-col justify-center items-center rounded-lg border-2 border-[#181B2C] bg-[#0F1017]  w-[200px] h-[160px] cursor-pointer flex-shrink-0 transition-all hover:bg-[#31A9ED] hover:border-[#31A9ED] hover:w-[220px] group select-none">
                <p className="text-xl text-center">Sunday</p>
                <section className="pt-2 flex flex-col group-hover:!text-white">
                    {/* SUNRISE */}
                    <div className="flex items-center gap-2 text-[#949AB5] text-sm">
                        <SunriseIcon
                            size={24}
                            className="text-[#31A9ED] group-hover:text-white"
                        />
                        <span className="group-hover:text-white">
                            Sunrise:{' '}
                        </span>
                    </div>
                    {/* SUNSET */}
                    <div className="flex items-center gap-2 text-[#949AB5] text-sm">
                        <SunsetIcon
                            size={24}
                            className="text-[#31A9ED] group-hover:text-white"
                        />
                        <span className="group-hover:text-white">Sunset: </span>
                    </div>
                    {/* UV INDEX */}
                    <div className="flex items-center gap-2 text-[#949AB5] text-sm">
                        <Uv02Icon
                            size={24}
                            className="text-[#31A9ED] group-hover:text-white"
                        />
                        <span className="group-hover:text-white">
                            UV Index:{' '}
                        </span>
                    </div>
                    {/* CHANCE OF RAIN */}
                    <div className="flex items-center gap-2 text-[#949AB5] text-sm">
                        <CloudAngledRainIcon
                            size={24}
                            className="text-[#31A9ED] group-hover:text-white"
                        />
                        <span className="group-hover:text-white">
                            Chance Of Rain:{' '}
                        </span>
                    </div>
                </section>
            </div>
        </>
    );
}
