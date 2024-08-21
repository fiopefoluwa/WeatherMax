import {
    SunriseIcon,
    SunsetIcon,
    Uv02Icon,
    CloudAngledRainIcon,
} from 'hugeicons-react';
import extractDayFromNum from '../utils/extractDay';

export default function DailyWeatherPill({ sunrise, sunset, uv, chance, day }) {
    const readableDay = extractDayFromNum(new Date(day).getDay());

    return (
        <>
            <div className="p-2 flex flex-col justify-center items-center rounded-lg border-2 border-[#181B2C] bg-[#0F1017]  w-[240px] h-[180px] cursor-pointer flex-shrink-0 transition-all hover:bg-[#31A9ED] hover:border-[#31A9ED] hover:w-[260px] group select-none">
                <p className="text-xl text-center">{readableDay}</p>
                <section className="pt-2 flex flex-col group-hover:!text-white">
                    {/* SUNRISE */}
                    <div className="flex items-center gap-2 text-[#949AB5] text-sm">
                        <SunriseIcon
                            size={24}
                            className="text-[#31A9ED] group-hover:text-white"
                        />
                        <span className="group-hover:text-white">
                            Sunrise:{' '}
                            <span className="text-white font-medium">
                                {sunrise}
                            </span>
                        </span>
                    </div>
                    {/* SUNSET */}
                    <div className="flex items-center gap-2 text-[#949AB5] text-sm">
                        <SunsetIcon
                            size={24}
                            className="text-[#31A9ED] group-hover:text-white"
                        />
                        <span className="group-hover:text-white">
                            Sunset:{' '}
                            <span className="text-white font-medium">
                                {sunset}
                            </span>
                        </span>
                    </div>
                    {/* UV INDEX */}
                    <div className="flex items-center gap-2 text-[#949AB5] text-sm">
                        <Uv02Icon
                            size={24}
                            className="text-[#31A9ED] group-hover:text-white"
                        />
                        <span className="group-hover:text-white">
                            UV Index:{' '}
                            <span className="text-white font-medium">{uv}</span>
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
                            <span className="text-white font-medium">
                                {chance}%
                            </span>
                        </span>
                    </div>
                </section>
            </div>
        </>
    );
}
